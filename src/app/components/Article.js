'use client';
import Image from 'next/image';
import styled from 'styled-components';

export default function Article(){
  return (
    <Wrapper>
      <TextWrapper>
        <Title>The art of brewing coffee</Title>
        <Text>
          Coffee is not just a beverage; it is an art form. Behind every exceptional cup of coffee lies a carefully choreographed dance of beans, water, and technique. Brewing coffee is an art that encompasses science, precision, and passion. At The Coffee Place we celebrate the art of brewing. From the selection of the finest beans from around the world to the precise calibration of water temperature and extraction time, we believe that crafting the perfect cup of coffee is a journey worth embarking upon.
        </Text>
      </TextWrapper>
      <Image 
        src='/coffee-machine.jpg'
        alt='coffee brew'
        width={400}
        height={450}
        style={{objectFit:'cover', borderRadius: '2px'}}
      />
    </Wrapper>
    
  )
}

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 60%;
  padding: 100px;
  height: 100%;

  margin: 0 auto;
  background-color: white;
  gap: 48px;

  @media(max-width: 1600px) {
    grid-template-columns: revert;
    width: 80%;
    gap: 32px;
    padding: 100px 0;
    justify-items: center;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-text: center;
`;

const Title = styled.h2`
  font-size: 1.625rem;
  color: black;
  font-weight: 100;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

const Text = styled.p`
  font-size: 1rem;
  color: black;
  font-weight: 200;
  line-height: 2.5;

`;
