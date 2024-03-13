import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  metadataBase: new URL('https://rmitbusinessclub.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  title: 'RMIT Vietnam Business Club - SGS',
  description: 'Founded in 2004, making us the oldest active academic club at RMIT with the vision of nurturing future business leaders.',
  icons: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/logo%20black.png?alt=media&token=c0577899-9f7e-476e-9103-3f57783a06e5',
  openGraph: {
    title: 'RMIT Vietnam Business Club - SGS',
    description: 'Founded in 2004, making us the oldest active academic club at RMIT with the vision of nurturing future business leaders.',
    type: 'website',
    images: [`https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/%5BBC%5D%20Website%20Cover.png?alt=media&token=fc6c6e1d-ab37-45c5-85e8-1f9519477afe`]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      {/* <link
        rel="icon"
        href="https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/OtherEvent%2FBCareer%202.0%2FGS%2FMr.%20Le%20Tuan%20Anh.jpg?alt=media&token=e0333ff5-ad60-4800-9385-7f0d2f097d02"
        type="image/<generated>"
        sizes="<generated>"
      /> */}
      <body>
        < Header />
        {children}
        < Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html >
  );
}
