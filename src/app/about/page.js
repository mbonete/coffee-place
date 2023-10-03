'use client';
import styled from 'styled-components';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PageWrapper } from '../components/PageWrapper';
import Image from 'next/image';

export default function About() {
  const articleProps = {
    title: 'About Us',
    text: 'Welcome to The Coffee Place, where our passion for coffee is at the heart of everything we do. Established with a love for the art of brewing, we are more than just a coffee shop - we are a coffee experience that extends beyond our physical doors to the digital realm. At our cozy coffee shop, nestled in the heart of [Location], we curate a warm and inviting space for coffee enthusiasts and casual sippers alike. Our dedicated baristas craft each cup with precision and care, using ethically sourced beans from around the world. From single-origin pour-overs to rich, velvety lattes, we offer a diverse range of coffee options to satisfy every palate. But we\'re not limited to brick and mortar; we also bring the coffee experience to your doorstep. Our online store is a virtual haven for coffee lovers, offering a wide selection of beans, blends, and brewing equipment. Whether you\'re an at-home barista seeking the perfect roast or a gift-giver looking for a thoughtful present, our online shop has you covered. At [Business Name], sustainability is a core value. We strive to minimize our environmental footprint by using eco-friendly packaging and supporting fair-trade practices. With every sip of our coffee, you\'re not just enjoying a delicious brew; you\'re also contributing to a more sustainable and equitable coffee industry. Join us in our mission to elevate your coffee experience, whether you visit us in person or explore our virtual coffee aisle. We\'re not just a coffee shop; we\'re a community of coffee aficionados sharing our passion, one cup at a time.',
    src:'/coffee-bag.png',
    alt:'our products',
  }
  const { title, text, src, alt } = articleProps;

  return (
    <PageWrapper> 
      <Header />
      <ArticleWrapper>
        <Title>{title}</Title>
        <Grid>
          <TextWrapper>
            <Text>{text}</Text>
          </TextWrapper>
          <Image 
            src={src}
            alt={alt}
            height={600}
            width={900}
          />
        </Grid>
      </ArticleWrapper>
      <Footer />
    </PageWrapper>
  )
}



const ArticleWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 100px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`; 

const Title = styled.h2`
  font-size: 1.625rem;
  color: black;
  font-weight: 100;
  text-transform: uppercase;
  margin-bottom: 48px;
`;

const Text = styled.p`
  font-size: 1rem;
  color: black;
  font-weight: 200;
  line-height: 2.5;
  column-count: 2;
  column-fill: auto;
  height: 600px;
  width: 900px;

`;