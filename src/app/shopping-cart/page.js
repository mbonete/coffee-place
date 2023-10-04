'use client'
import styled from 'styled-components';
import Image from 'next/image';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PageWrapper } from '../components/PageWrapper';
import { useCart } from "../hooks/useCart";
import { ShoppingCart } from 'react-feather';
export default function ShoppingCartPage() {
  const { products } = useCart();
  console.log('debug', products);

  return (
    <PageWrapper> 
      <Header />
      <Title>Shopping Cart</Title>
          <Grid>
            <ListWrapper>
              { products?.length
                ? products.map((product, i) => (
                    <GalleryElement key={product.name + i}>
                      <GalleryImage 
                        src={product.src} 
                        alt={product.alt} 
                        width={100}
                        height={100}
                      />
                      <Tag>
                        <TagRow>
                          <Bold>{product.name}</Bold>
                          <Bold>Quantity</Bold>
                          <Bold>Total</Bold>
                        </TagRow>
                        <TagRow>
                          <Price>{product.price}</Price>
                          <select style={{width: '60px'}}>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                          <Bold>{product.price}</Bold>
                        </TagRow>
                          
                      </Tag>
                    </GalleryElement>
                ))
                : <Bold>You did not add any products yet</Bold>
              }
            </ListWrapper>
          </Grid>
        
      <Footer />
    </PageWrapper>
  )
}

const Grid = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 16px;
  margin: 0 auto;
`;
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 48px;
  max-height: 60%;
  min-height: 500px;
  overflow-y: auto;
`;

const Title = styled.h3`
  font-size: 1.625rem;
  color: black;
  font-weight: 100;
  text-transform: uppercase;
  margin: 0 auto;
`;

const GalleryElement = styled.div`
  height: 100px;
  display: flex;
  border: 1px solid lightgray;
`;

const GalleryImage = styled(Image)`
  object-fit: cover;
  min-width: 100px;
  min-height: 100px;
`;

const Tag = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: 1fr 1fr;
  padding: 16px;
  gap: 16px;
`;
const TagRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33%);
  justify-items: end;
  align-items: baseline;
  width: 100%;
`;
const Bold = styled.span`
  font-weight: 600;
`;
const Price = styled.span`
  font-weight: 400;
  font-size: 1rem;
`;
