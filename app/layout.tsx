import Navbar from '@/components/navbar/navbar';
import AuthProvider from '@/components/providers/auth-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import TopLoader from '@/components/providers/top-loader';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'AbdulazizDev',
  description: 'Dasturlash olamidagi suhbatlar.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>
            <TopLoader />
            <Navbar />
            {children}
            <TailwindIndicator />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
