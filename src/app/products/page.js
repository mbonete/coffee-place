'use client';
import Image from 'next/image';
import styled from 'styled-components';
import products from '../products';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PageWrapper } from "../components/PageWrapper";
import ShoppingCartIconButton from '../components/ShoppingCartIconButton';

export default function Products() {
  return (
    <PageWrapper> 
      <Header />
      <Title>Our Products</Title>
      <Wrapper>
        {
          Object.values(products).map((product) => (
            <GalleryElement key={product.productId}>
              <GalleryImage 
                src={product.src} 
                alt={product.alt} 
                width={500}
                height={500}
              />
              <Tag>
                <CoffeInfo>
                  <Name>{product.name}</Name>
                  <Description>{product.description}</Description>
                </CoffeInfo>
                <PriceInfo>
                  <Price>{product.price}</Price>
                  <ShoppingCartIconButton product={product}/>
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
  padding-bottom: 100px;
`;

const Title = styled.h3`
  font-size: 1.625rem;
  color: black;
  font-weight: 100;
  text-transform: uppercase;
  margin: 0 auto;
  padding-bottom: 48px;
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
  max-width: 80%;
  justify-content: space-between;
  padding-right: 8px;

`;
const PriceInfo = styled.div`
  display: grid;
  grid-template-columns: 50px 40px;
  align-items: end;
  gap: 16px;

  @media (max-width: 850px) {
    grid-template-columns: revert;
    grid-template-rows: 1fr 1fr;
    gap: 8px;
    justify-items: end;
    align-items: self-start;
  }

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
  //ellipsis
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;