'use client';
import Image from 'next/image';
import styled from 'styled-components';

export default function Article({articleProps}){
  const { title, text, src, alt } = articleProps;
  return (
    <Wrapper>
      <TextWrapper>
        <Title>{title}</Title>
        <Text>
          { typeof text === 'string' ? text : text.map((c, i) => <li key={c+i}>{c}</li>) }
        </Text>
      </TextWrapper>
      <Image 
        src={src} 
        alt={alt}
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
  justify-items: center;
  padding: 100px;
  height: 100%;
  width: 60%;
  margin: 0 auto;
  background-color: white;
  gap: 48px;
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
