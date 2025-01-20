import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/common/ScrollToTop';
import AnimatedMain from '@/components/layout/AnimatedMain';
import { LanguageProvider } from '@/i18n/LanguageContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'TIS Automation',
  description: 'Votre partenaire en automatisation industrielle',
  icons: {
    icon: [
      { url: '/images/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/images/favicon.svg', type: 'image/svg+xml' },
      { url: '/images/favicon.ico' }
    ],
    apple: [
      { url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'manifest',
        url: '/images/site.webmanifest'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} font-sans`}>
      <body className="flex flex-col min-h-screen overflow-x-hidden w-full m-0 p-0">
        <LanguageProvider>
          <Header />
          <AnimatedMain>
            {children}
          </AnimatedMain>
          <Footer />
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
