import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import { HomeWrapper } from "./components/HomeWrapper";

export default function Home() {
  return (
    <HomeWrapper> 
      <Header />
      <Article />
      <Footer />
    </HomeWrapper>
  )
}
