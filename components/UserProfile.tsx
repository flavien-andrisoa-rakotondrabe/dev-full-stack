'use client';

import { notLoggedRoutes } from '@/lib/route';
import { logoutService } from '@/services/authService';
import Image from 'next/image';
import Link from 'next/link';

import { useEffect, useRef, useState } from 'react';

const UserProfile = () => {
  const menuRef = useRef<HTMLDivElement>(null);

  const [showMenu, setShowMenu] = useState(false);

  // Fermer le menu si on clique en dehors
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    await logoutService();
    window.location.href = notLoggedRoutes[0];
  };

  return (
    <div ref={menuRef} className="relative z-50">
      <div
        onClick={() => setShowMenu((prev) => !prev)}
        className="w-12 h-12 rounded-full border border-[#423A3A] flex items-center justify-center select-none cursor-pointer"
      >
        <Image src="/icons/user.svg" alt="Profile" width={21} height={21} />
      </div>
      {showMenu && (
        <div className="absolute right-[15px] top-[65px] w-60 h-[168px]">
          <div
            className="flex flex-col gap-[22px] px-[22px] py-[21px] font-bold text-[16px] whitespace-nowrap backdrop-blur-2xl"
            style={{
              background:
                'linear-gradient(168.63deg, rgba(255, 255, 255, 0.25) -3.48%, rgba(255, 255, 255, 0.1) 108.34%)',
            }}
          >
            <Link
              href="#"
              className="flex items-center gap-[21px] cursor-pointer hover:text-(--color-primary) transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M10.6667 0C12.0812 0 13.4377 0.561903 14.4379 1.5621C15.4381 2.56229 16 3.91885 16 5.33333C16 6.74782 15.4381 8.10438 14.4379 9.10457C13.4377 10.1048 12.0812 10.6667 10.6667 10.6667C9.25218 10.6667 7.89562 10.1048 6.89543 9.10457C5.89524 8.10438 5.33333 6.74782 5.33333 5.33333C5.33333 3.91885 5.89524 2.56229 6.89543 1.5621C7.89562 0.561903 9.25218 0 10.6667 0ZM10.6667 2.66667C9.95942 2.66667 9.28115 2.94762 8.78105 3.44772C8.28095 3.94781 8 4.62609 8 5.33333C8 6.04058 8.28095 6.71885 8.78105 7.21895C9.28115 7.71905 9.95942 8 10.6667 8C11.3739 8 12.0522 7.71905 12.5523 7.21895C13.0524 6.71885 13.3333 6.04058 13.3333 5.33333C13.3333 4.62609 13.0524 3.94781 12.5523 3.44772C12.0522 2.94762 11.3739 2.66667 10.6667 2.66667ZM10.6667 12C14.2267 12 21.3333 13.7733 21.3333 17.3333V21.3333H0V17.3333C0 13.7733 7.10667 12 10.6667 12ZM10.6667 14.5333C6.70667 14.5333 2.53333 16.48 2.53333 17.3333V18.8H18.8V17.3333C18.8 16.48 14.6267 14.5333 10.6667 14.5333Z"
                  fill="currentColor"
                />
              </svg>
              <p>Mon profil</p>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-[21px] cursor-pointer hover:text-(--color-primary) transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M18 6H2V4H18V6ZM16 0H4V2H16V0ZM20 10V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V10C0 9.46957 0.210714 8.96086 0.585786 8.58579C0.960859 8.21071 1.46957 8 2 8H18C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10ZM14 14L8 10.73V17.26L14 14Z"
                  fill="currentColor"
                />
              </svg>
              <p>Mes abonnements</p>
            </Link>
            <div
              className="flex items-center gap-[21px] cursor-pointer hover:text-(--color-primary) transition"
              onClick={handleLogout}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M2 18C1.45 18 0.979333 17.8043 0.588 17.413C0.196667 17.0217 0.000666667 16.5507 0 16V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196667 1.45067 0.000666667 2 0H9V2H2V16H9V18H2ZM13 14L11.625 12.55L14.175 10H6V8H14.175L11.625 5.45L13 4L18 9L13 14Z"
                  fill="currentColor"
                />
              </svg>
              <p>Logout</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
