import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import { PageWrapper } from "./components/PageWrapper";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <PageWrapper> 
      <Header />
      <Gallery />
      <Article articleProps={articleProps}/>
      <Footer />
    </PageWrapper>
  )
}

const articleProps = {
  title: 'The art of brewing coffee',
  text: 'Coffee is not just a beverage; it\'s an art form. Behind every exceptional cup of coffee lies a carefully choreographed dance of beans, water, and technique. Brewing coffee is an art that encompasses science, precision, and passion. At The Coffee Place we celebrate the art of brewing. From the selection of the finest beans from around the world to the precise calibration of water temperature and extraction time, we believe that crafting the perfect cup of coffee is a journey worth embarking upon.',
  src: '/coffee-machine.jpg',
  alt: 'coffee brew',
}