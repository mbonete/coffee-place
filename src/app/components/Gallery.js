'use client';
import Image from 'next/image';
import styled from 'styled-components';

export default function Gallery(){
  return (
    <Wrapper>
      <GalleryImage 
        src='/coffee1.jpg' 
        alt='espresso'
        width={700}
        height={700}
      />
      <GalleryImage 
        src='/coffee3.jpg' 
        alt='capuccino'
        width={700}
        height={700}
      />
      <GalleryImage
        src='/coffee2.jpg' 
        alt='iced latte'
        width={700}
        height={700}
      />

    </Wrapper>
    
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;


`;

const GalleryImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: grayscale(50%);
  overflow: hidden;
  transition: transform 250ms;



  &:hover {
    filter: revert;
    transform: scale(1.02);
  }
`;