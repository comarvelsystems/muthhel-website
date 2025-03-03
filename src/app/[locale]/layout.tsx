import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';

import { routing } from '@/i18n/routing';
import { Footer, Header } from '@/components';
import '../globals.css';

const RBFont = localFont({
  src: [
    {
      path: '../assets/fonts/ArbFONTS-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ArbFONTS-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HomePage.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: t('author') }],
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: '',
      images: [
        {
          url: '',
          width: 800,
          height: 600,
          alt: '',
        },
      ],
      siteName: t('title'),
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
      },
    },
    viewport: {
      width: 'device-width',
      initialScale: 1.0,
    },
    icons: {
      icon: '/favicon.ico',
      // apple: "/apple-touch-icon.png",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === 'en' ? 'ltr' : 'rtl';

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className={`${RBFont.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages} locale={locale}>
            <main className="min-h-screen">
              <Header />
              {children}
              <Footer />
            </main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
