import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/navbar/header';

const inter = Inter({ subsets: ['latin'] });

interface MetadataProps {
  title: string;
  description: string;
}

export const metadata: MetadataProps = {
  title: 'HuguR',
  description: 'HuguR Mental Health Support',
};

export default async function LocaleLayout({ children, authModal }) {
  return (
    <html data-theme="lightmode">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className + ' h-screen'}>
        <Header />
        <div className="w-full h-fit m-auto relative z-10">
          {children}
          {authModal}
        </div>
      </body>
    </html>
  );
}
