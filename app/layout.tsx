import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import './globals.css';
import ThemeProvider from './_components/shared/provider/ThemeProvider';
import ConvexClientProvider from './_components/shared/provider/ConvexClerkProvider';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from './_components/shared/ScrollToTop';
import 'pure-react-carousel/dist/react-carousel.es.css';
import SuspenseWrapper from './_components/shared/provider/SuspenseWrapper';
import AudioProvider from './_components/shared/provider/AudioProvider';

const inter = Archivo({ subsets: ['latin'] });

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
                        <SuspenseWrapper>
                            <AudioProvider>
                            {children}
                            </AudioProvider>
                            <Toaster />
                            <ScrollToTop />
                        </SuspenseWrapper>
                    </ConvexClientProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
