import './globals.css';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Header from '@/components/navbar/header';

const inter = Inter({ subsets: ['latin'] });

// ! This is breaking atm, see https://github.com/vercel/next.js/issues/49373
// export function generateStaticParams() {
//   return [{ locale: 'is' }, { locale: 'en' }];
// }

interface MetadataProps {
  title: string;
  description: string;
}

export const metadata: MetadataProps = {
  title: 'HuguR',
  description: 'HuguR Mental Health Support',
};

export default async function LocaleLayout({
  children,
  authModal,
  params: { locale },
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} data-theme="lightmode">
      <body className={inter.className + ' h-screen'}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <div className="w-full h-fit m-auto relative z-10">
            {children}
            {authModal}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
