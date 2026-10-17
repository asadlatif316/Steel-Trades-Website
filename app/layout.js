import { Archivo_Narrow, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';
import Header from './components/SiteHeader';

const archivoNarrow = Archivo_Narrow({
  variable: '--font-archivo-narrow',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

const plex = IBM_Plex_Sans({
  variable: '--font-plex',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata = {
  title: {
    default: `${site.name} | Iron and steel supply in Sialkot`,
    template: `%s | ${site.name}`,
  },
  description: `${site.name} supplies iron and steel in ${site.city}.`,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${archivoNarrow.variable} ${plex.variable} h-full antialiased`}
    >
      <body className='flex min-h-full flex-col'>
        <Header />
        {children}
      </body>
    </html>
  );
}
