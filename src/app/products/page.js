'use client';
import Image from 'next/image';
import styled from 'styled-components';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PageWrapper } from "../components/PageWrapper";
import { ShoppingCart } from 'react-feather';

const products = [
  {
    src: '/coffee-bag.png',
    alt: 'coffee bag',
  },
  {
    src: '/brew-coffee.jpg',
    alt: 'brewed coffee',
  },
  {
    src: '/coffee1.jpg',
    alt: '',
  },
  {
    src: '/coffee2.jpg',
    alt: '',
  },
  {
    src: '/brew-coffee.jpg',
    alt: 'brewed coffee',
  },
  {
    src: '/coffee3.jpg',
    alt: '',
  },
  {
    src: '/coffee1.jpg',
    alt: '',
  },
];

export default function Products() {
  return (
    <PageWrapper> 
      <Header />
      <Title>Our Products</Title>
      <Wrapper>
        {
          products.map((product, i) => (
            <GalleryElement key={product.src + i}>
              <GalleryImage 
                src={product.src} 
                alt={product.alt} 
                width={500}
                height={500}
              />
              <Tag>
                <CoffeInfo>
                  <Name>Capuccino</Name>
                  <Description>Espresso, steamed milk, and milk foam, creating a creamy and flavorful drink.</Description>
                </CoffeInfo>
                <PriceInfo>
                  <Price>2.99$</Price>
                  <ShoppingCart size={30} color='orange'/>
                </PriceInfo>
                
              </Tag>
              
            </GalleryElement>
          ))
        }      
      </Wrapper>
      <Footer />
    </PageWrapper>
  )
}



const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 550px;
`;

const Title = styled.h3`
  font-size: 1.625rem;
  color: black;
  font-weight: 100;
  text-transform: uppercase;
  margin-bottom: 48px;
  margin-left: 48px;
`;
const GalleryElement = styled.div`
  width: 100%;
  height: 100%;
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const GalleryImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 80%;
  filter: grayscale(50%);

  &:hover {
    filter: revert;
  }
`;

const Tag = styled.div`
  display: flex;
  height: 20%;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid lightgray;
`;
const CoffeInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70%;
  justify-content: space-between;

`;
const PriceInfo = styled.div`
  display: flex;
  align-items: end;
  gap: 16px;
`;
const Name = styled.span`
  font-weight: 600;
`;
const Price = styled.span`
  font-weight: 400;
  font-size: 1.25rem;
  margin-bottom: -2px;
`;
const Description = styled.p`
  color: gray;
`;