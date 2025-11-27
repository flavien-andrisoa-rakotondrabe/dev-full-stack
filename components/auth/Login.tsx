'use client';

import Image from 'next/image';

import { Dispatch, SetStateAction, useState } from 'react';
import { authOptions } from '@/lib/options';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { loginSchema } from '@/schemas/authSchema';
import { loginService } from '@/services/authService';
import { Spinner } from '@/components/ui/spinner';

type FormValues = z.infer<typeof loginSchema>;

const Login = ({
  setActualAuthOption,
}: {
  setActualAuthOption: Dispatch<SetStateAction<string>>;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    const parseRes = loginSchema.safeParse(data);

    if (parseRes.success) {
      // API CALL
      setIsLoading(true);
      const res = await loginService({
        email: parseRes.data.email,
        password: parseRes.data.password,
      });

      if (res.userNotFound) {
        form.setError('email', {
          type: 'manual',
          message: 'Adresse email inconnue',
        });

        setIsLoading(false);
        return;
      } else if (res.invalidPassword) {
        form.setError('password', {
          type: 'manual',
          message: 'Mot de passe incorrect',
        });

        setIsLoading(false);
        return;
      } else if (res.error) {
        toast.error('Erreur lors de la connexion', {
          description: res.error,
        });

        setIsLoading(false);
        return;
      } else if (res.user?.id) {
        toast.success('Connexion réussie!', {
          description: 'Accès à la plateforme',
        });

        window.location.href = '/home';
      }
    } else {
      setIsLoading(false);
      toast.success('Erreur de connexion', {
        description: 'Vérifier les identifiants',
      });
    }
  };

  return (
    <div className="w-[438px] h-[544px] flex flex-col gap-[84px] px-16 py-10 bg-[#090808] rounded-2xl">
      <div className="flex justify-center">
        <div className="w-[203px] h-[45px]">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={203}
            height={45}
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-6">
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-4">
                    <FormLabel htmlFor="email" className="font-400 text-[16px]">
                      Email
                    </FormLabel>
                    <FormControl>
                      <div className="relative flex items-center">
                        <Input
                          id="email"
                          {...field}
                          type="email"
                          placeholder="test@gmail.com"
                          autoComplete="off"
                          className="w-full h-10 ps-12 pe-3 font-400 text-[14px] border-[0.5px] border-[#A9A9A9] rounded-[8px]"
                          autoFocus
                          required
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          className="absolute left-2.5"
                        >
                          <path
                            d="M18 4L10 9L2 4V2L10 7L18 2M18 0H2C0.89 0 0 0.89 0 2V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0Z"
                            fill="#6E6B6B"
                          />
                        </svg>
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs">
                      {form.formState.errors.email?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-4">
                    <FormLabel
                      htmlFor="password"
                      className="font-400 text-[16px]"
                    >
                      Mote de passe
                    </FormLabel>
                    <FormControl>
                      <div className="relative flex items-center">
                        <Input
                          id="password"
                          {...field}
                          type="password"
                          placeholder="Entrer le mot de passe"
                          autoComplete="off"
                          className="w-full h-10 ps-12 pe-3 font-400 text-[14px] border-[0.5px] border-[#A9A9A9] rounded-[8px]"
                          autoFocus
                          required
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="24"
                          viewBox="0 0 20 24"
                          fill="none"
                          className="absolute left-2.5"
                        >
                          <path
                            d="M3.5 6.5V10H2C1.46957 10 0.960859 10.2107 0.585786 10.5858C0.210714 10.9609 0 11.4696 0 12L0 22C0 22.5304 0.210714 23.0391 0.585786 23.4142C0.960859 23.7893 1.46957 24 2 24H18C18.5304 24 19.0391 23.7893 19.4142 23.4142C19.7893 23.0391 20 22.5304 20 22V12C20 11.4696 19.7893 10.9609 19.4142 10.5858C19.0391 10.2107 18.5304 10 18 10H16.5V6.5C16.5 4.77609 15.8152 3.12279 14.5962 1.90381C13.3772 0.684819 11.7239 0 10 0C8.27609 0 6.62279 0.684819 5.40381 1.90381C4.18482 3.12279 3.5 4.77609 3.5 6.5ZM6 10V6.5C6 5.43913 6.42143 4.42172 7.17157 3.67157C7.92172 2.92143 8.93913 2.5 10 2.5C11.0609 2.5 12.0783 2.92143 12.8284 3.67157C13.5786 4.42172 14 5.43913 14 6.5V10H6ZM8 15.5C8.00007 15.1535 8.09016 14.813 8.26143 14.5118C8.43269 14.2106 8.67927 13.9591 8.97699 13.7819C9.27472 13.6046 9.61337 13.5078 9.95978 13.5008C10.3062 13.4939 10.6485 13.577 10.9531 13.7421C11.2577 13.9072 11.5142 14.1486 11.6974 14.4427C11.8807 14.7368 11.9844 15.0734 11.9984 15.4196C12.0124 15.7658 11.9362 16.1097 11.7773 16.4176C11.6184 16.7255 11.3823 16.9868 11.092 17.176L11.084 17.181C11.084 17.181 11.279 18.361 11.499 19.751V19.752C11.4987 19.9506 11.4197 20.1409 11.2793 20.2813C11.1389 20.4217 10.9486 20.5007 10.75 20.501H9.248C9.04943 20.5007 8.85908 20.4217 8.71867 20.2813C8.57826 20.1409 8.49926 19.9506 8.499 19.752V19.751L8.914 17.181C8.63309 16.9998 8.40207 16.7511 8.24205 16.4577C8.08203 16.1642 7.99813 15.8353 7.998 15.501L8 15.5Z"
                            fill="#6E6B6B"
                          />
                        </svg>
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs">
                      {form.formState.errors.password?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-[8px] cursor-pointer"
              style={{
                background:
                  'linear-gradient(360deg, #E21A1D 0%, #D91A1A 50%, #630202 100%)',
              }}
            >
              {isLoading && <Spinner />}
              <span className="font-400 text-[14px]">Connexion</span>
            </button>
          </form>
        </Form>

        <div className="flex justify-center">
          <p className="font-400 text-[14px] text-[#726B6B]">
            <span>Pas de compte ?</span>{' '}
            <span
              className="text-(--color-primary) underline underline-offset-1 cursor-pointer"
              onClick={() => setActualAuthOption(authOptions[1])}
            >
              S'inscrire
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
