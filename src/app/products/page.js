'use client';
import Image from 'next/image';
import styled from 'styled-components';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PageWrapper } from "../components/PageWrapper";
import ShoppingCartIconButton from '../components/ShoppingCartIconButton';

const products = [
  {
    src: '/coffee-bag.png',
    alt: 'coffee bag',
    name: 'Filter Coffee',
    description: 'Ground coffee suited for use in drip coffee makers, delivering a convenient and consistent brewing experience.',
    price: '3.99$'
  },
  {
    src: '/coffee1.jpg',
    alt: 'Espresso',
    name: 'Espresso',
    description: 'Concentrated and bold espresso shot with a rich and intense flavor.',
    price: '1.25$'
  },
  {
    src: '/coffee2.jpg',
    alt: 'Iced Latte',
    name: 'Iced Latte',
    description: 'Refreshing and creamy chilled coffee beverage made by combining espresso with cold milk and ice.',
    price: '2.85$'
  },
  {
    src: '/americano-coffee.jpg',
    alt: 'americano coffee',
    name: 'Americano',
    description: 'A Caffè Americano is a coffee made by diluting espresso with hot water, resulting in a milder yet flavorful coffee beverage.',
    price: '2.25$'
  },
  {
    src: '/coffee3.jpg',
    alt: 'capuccino',
    name: 'Capuccino',
    description: 'Espresso, steamed milk, and milk foam, creating a creamy and flavorful drink.',
    price: '2.5$'
  },
  {
    src: '/coffee4.png',
    alt: 'caramel macchiato',
    name: 'Caramel Macchiato',
    description: 'Espresso, vanilla syrup, steamed milk, and caramel sauce.',
    price: '3.95$'
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