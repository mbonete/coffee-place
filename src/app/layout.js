import { Bricolage_Grotesque, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import StyledComponentsRegistry from './lib/registry';
import './globals.css'
import { CartProvider } from './hooks/useCart';
import { PageWrapper } from './components/PageWrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: 'The Coffee Place — Strong coffee. Strong opinions.',
  description: 'Small-batch roastery. Six staples, one stance: coffee should taste like something.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body>
        <CartProvider>
          <StyledComponentsRegistry>
            <a href="#main" className="skip-link">Skip to content</a>
            <PageWrapper>
              <Header />
              <Main id="main">{children}</Main>
              <Footer />
            </PageWrapper>
          </StyledComponentsRegistry>
        </CartProvider>
      </body>
    </html>
  )
}
