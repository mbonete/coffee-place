'use client';
import styled from 'styled-components';

export default function About() {
  return (
    <Wrapper>
      <Title>About Us</Title>
      <Grid>
        <Text>
          Welcome to The Coffee Place, where our passion for coffee is at the heart of everything we do. Established with 
          a love for the art of brewing, we are more than just a coffee shop - we are a coffee experience that extends 
          beyond our physical doors to the digital realm. At our cozy coffee shop we curate a warm and inviting space for 
          coffee enthusiasts and casual sippers alike. Our dedicated baristas craft each cup with precision and care, using 
          ethically sourced beans from around the world. 
          We also bring the coffee experience to your doorstep. Our online store is a virtual haven for coffee lovers, 
          offering a wide selection of beans, blends, and brewing equipment. Whether you are an at-home barista seeking 
          the perfect roast or a gift-giver looking for a thoughtful present, our online shop has you covered.
           
        </Text>
        <Text>

          At The Coffee Place, sustainability is a core value. 
          We strive to minimize our environmental footprint by using eco-friendly packaging and supporting fair-trade practices. 
          With every sip of our coffee, you are not just enjoying a delicious brew; you are also contributing to a more sustainable 
          and equitable coffee industry. Join us in our mission to elevate your coffee experience, whether you visit us in person 
          or explore our virtual coffee aisle. We are not just a coffee shop; we are a community of coffee aficionados sharing our 
          passion, one cup at a time.
        </Text>
      </Grid>
      
    </Wrapper>
  )
}



const Wrapper = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 60%;
  height: 100%;
  margin: 0 auto;
  padding-bottom: 64px;
`;


const Title = styled.h2`
  font-size: 1.625rem;
  color: black;
  font-weight: 100;
  text-transform: uppercase;
  margin-bottom: 48px;
`;
const Grid = styled.div`
display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;

  @media(max-width: 1600px){
    grid-template-columns: revert;
  }
`;
const Text = styled.p`
  font-size: 1rem;
  color: black;
  font-weight: 200;
  line-height: 2.6;
  height: 100%;
  text-align: justify;
`;