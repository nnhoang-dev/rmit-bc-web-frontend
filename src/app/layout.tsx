import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { cx } from 'class-variance-authority';
import { Nunito_Sans, Open_Sans, Poppins } from "next/font/google";
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'RMIT Business Club',
  description: 'RMIT Business Club',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        < Header />
        {children}
        < Footer />
      </body>
    </html >
  );
}
