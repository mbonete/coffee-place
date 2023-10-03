import Header from "../components/Header";
import Footer from "../components/Footer";
import { PageWrapper } from '../components/PageWrapper';
import Article from '../components/Article';

export default function Contact() {
  return (
    <PageWrapper> 
      <Header />
      <Article articleProps={articleProps}/>
      <Footer />
    </PageWrapper>
  )
}

const articleProps = {
  title: 'Contact',
  text: ['thecoffeeplace@coffeeplace.com', '+9291828301343', 'Spoon Mug Street, 104, Bean Kingdom'],
  src:'/brew-coffee.jpg',
  alt:'',
}
