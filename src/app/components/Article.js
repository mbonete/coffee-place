'use client';
import Image from 'next/image';
import styled from 'styled-components';

export default function Article(){
  return (
    <Wrapper>
      <TextWrapper>
        <Title>The art of brewing coffee</Title>
        <Text>
          Coffee is not just a beverage; it&apos;s an art form. Behind every exceptional cup of coffee lies a carefully 
          choreographed dance of beans, water, and technique. Brewing coffee is an art that encompasses science, precision, 
          and passion. At &quot;Brewed to Perfection,&quot; we celebrate the art of brewing. From the selection of the finest 
          beans from around the world to the precise calibration of water temperature and extraction time, we believe that 
          crafting the perfect cup of coffee is a journey worth embarking upon.
        </Text>
      </TextWrapper>
      <Image 
        src='/brew-coffee.jpg' 
        alt='coffee brew'
        width={400}
        height={450}
        style={{objectFit:'cover'}}
      />
    </Wrapper>
    
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 100px;
  height: 100%;
  background-color: white;
  gap: 48px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-text: center;
  width: 400px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
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