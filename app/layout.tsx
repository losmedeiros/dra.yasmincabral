import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Dra. Yasmin Cabral - Psiquiatria',
  description: 'Sua saúde mental é prioridade. Médica Psiquiatra com atendimento humanizado em Campina Grande e On-line.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-[#151D22]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
