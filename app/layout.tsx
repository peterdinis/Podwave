import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from './_components/shared/provider/ThemeProvider';
import ConvexClientProvider from './_components/shared/provider/ConvextProvider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Podwave',
    description: 'New app to listen podcasts',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <ThemeProvider attribute='class'>
                    <ConvexClientProvider>
                        {children}
                        <Toaster />
                    </ConvexClientProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
