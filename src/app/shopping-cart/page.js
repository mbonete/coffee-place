'use client'
import styled from 'styled-components';
import Image from 'next/image';
import products from '../products';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PageWrapper } from '../components/PageWrapper';
import { useCart } from "../hooks/useCart";
import { Trash } from 'react-feather';

export default function ShoppingCartPage() {
  const { cartLines, changeQuantity } = useCart();

  console.log('debug', 'cartLines', cartLines);

  const cartProductIds = Object.keys(cartLines);

  return (
    <PageWrapper> 
      <Header />
      <Title>Shopping Cart</Title>
          <Grid>
            <ListWrapper>
              { cartProductIds.length
                ? cartProductIds.map((productId) => {
                    const quantity = cartLines[productId];
                    const product = products[productId];

                    return (
                      <GalleryElement key={productId}>
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
                            <select 
                              style={{width: '60px'}} 
                              value={quantity} 
                              onChange={(e) => changeQuantity(productId, Number(e.target.value))}
                            >

                              <option value={0}>0</option>
                              <option value={1} defaultValue>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                            </select>
                            <Bold>{product.price}</Bold>
                          </TagRow>
                        </Tag>
                      </GalleryElement>
                    );
                })
                : <Bold>You did not add any products yet</Bold>
              }
            </ListWrapper>
            <CheckoutWrapper>
              <Checkout>
                <Bold>Subtotal</Bold>
                <Price style={{display:'grid', justifyItems: 'end'}}>12.5$</Price>
                <Bold>Shipping cost</Bold>
                <Price style={{display:'grid', justifyItems: 'end'}}>2$</Price>
                <Bold>Tax</Bold>
                <Price style={{display:'grid', justifyItems: 'end'}}>0.10$</Price>
                
              </Checkout>
              <Total>
                <Bold>Total</Bold>
                <Bold style={{display:'grid', justifyItems: 'end'}}>15$</Bold>
              </Total>
              <CheckoutButton>Checkout</CheckoutButton>
            </CheckoutWrapper>
            
          </Grid>
        
      <Footer />
    </PageWrapper>
  )
}

const Grid = styled.div`
  display: grid;
  width: 60%;
  grid-template-columns:  1.75fr 1.25fr;
  padding-bottom: 48px;
  margin: 0 auto;

  @media (max-width: 1200px){
    width: 95%;
  }
`;
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 500px;
  margin: 48px;

  @media (max-width: 850px){
    margin: 8px;
  }
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
  border: 1px solid black;
`;

const Tag = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: 1fr 1fr;
  padding: 16px;
  gap: 8px;
`;
const TagRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: end;
  align-items: center;
  width: 100%;
`;
const Bold = styled.span`
  font-weight: 600;
  //ellipsis
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;

`;
const Price = styled.span`
  font-weight: 400;
  font-size: 1rem;
`;
const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 48px;
  max-height: 60%;
  min-height: 400px;
  gap: 48px;
  border: 1px solid orange;
  padding: 16px 24px;
  
  @media (max-width: 850px){
    margin: 8px;
  }

`;
const Checkout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 24px;
  
`;
const Total = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  border-top: 1px solid gray;
  padding-top: 48px;


`;

const CheckoutButton = styled.button`
  border-radius: 4px;
  background-color: orange;
  color: black;
  padding: 8px 16px;
`;