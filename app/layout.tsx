import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

import ReduxProvider from '@/providers/ReduxProvider';
import ToastProvider from '@/providers/ToastProvider';
import QueryProvider from '@/providers/QueryProvider';
import UserProvider from '@/providers/UserProvider';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'My X place',
  description: 'My X place',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body cz-shortcut-listen="true" className={montserrat.className}>
        <ReduxProvider>
          <ToastProvider>
            <QueryProvider>
              <UserProvider>{children}</UserProvider>
            </QueryProvider>
          </ToastProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
