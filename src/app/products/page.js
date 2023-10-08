'use client';
import Image from 'next/image';
import styled from 'styled-components';
import products from '../products';
import ShoppingCartIconButton from '../components/ShoppingCartIconButton';

export default function Products() {
  return (
    <>
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
                  <Price>${product.price}</Price>
                  <ShoppingCartIconButton product={product}/>
                </PriceInfo>
              </Tag>
            </GalleryElement>
          ))
        }      
      </Wrapper>
    </>
  )
}



const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 550px;
  padding-bottom: 100px;

  @media(max-width: 850px){
    grid-template-columns: 1fr;
    grid-auto-rows: 400px;
  }
`;

const Title = styled.h3`
  font-size: 1.625rem;
  color: black;
  font-weight: 100;
  text-transform: uppercase;
  margin: 0 auto;
  padding-bottom: 48px;

  @media(max-width: 850px){
    padding: 16px;
    padding-top: 32px;
    font-size: 1.35rem;
  }
`;
const GalleryElement = styled.div`
  width: 100%;
  height: 100%;
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media(max-width: 850px){
    padding: 16px;
  }
`;

const GalleryImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 80%;
  @media(max-width: 850px){
    height: 70%;
  }
`;

const Tag = styled.div`
  display: flex;
  height: 20%;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid lightgray;

  @media(max-width: 850px){
    height: 30%;
  }
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
  justify-items: end;
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