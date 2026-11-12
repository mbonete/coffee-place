import { Bowlby_One, Barlow, Barlow_Condensed, Red_Hat_Mono } from 'next/font/google';
import StyledComponentsRegistry from './lib/registry';
import './globals.css';
import { CartProvider } from './hooks/useCart';
import { PageWrapper } from './components/PageWrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

// Flexo display: the lettering printed on the sachets.
const display = Bowlby_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
});

// The small print on every sachet.
const small = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-small',
  display: 'swap',
});

const body = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

// The receipt printer. Used only on the receipt.
const receipt = Red_Hat_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-receipt',
  display: 'swap',
});

const siteUrl = 'https://the-coffee-place.vercel.app';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'The Coffee Place — six staples, printed as a series',
    template: '%s — The Coffee Place',
  },
  description:
    'A small coffee shop with six staples, each printed on its own sugar sachet. A fictional shop and front-end portfolio piece by Maria Bonete.',
  openGraph: {
    title: 'The Coffee Place',
    description: 'Six staples, printed as a series. Collect them all.',
    url: siteUrl,
    siteName: 'The Coffee Place',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Six printed coffee sachets on a pistachio table' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', images: ['/og.png'] },
};

export const viewport = {
  themeColor: '#B8D88A',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${small.variable} ${body.variable} ${receipt.variable}`}
    >
      <body>
        <StyledComponentsRegistry>
          <CartProvider>
            <a href="#main" className="skip-link">Skip to content</a>
            <PageWrapper>
              <Header />
              <Main id="main">{children}</Main>
              <Footer />
            </PageWrapper>
          </CartProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
