import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import { HomeWrapper } from "./components/HomeWrapper";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <HomeWrapper> 
      <Header />
      <Gallery />
      <Article />
      <Footer />
    </HomeWrapper>
  )
}
