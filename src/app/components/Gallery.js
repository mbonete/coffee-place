'use client';
import Image from 'next/image';
import styled from 'styled-components';

export default function Gallery(){
  return (
    <Wrapper>
      <GalleryImageWrap>
        <GalleryImage 
          src='/coffee1.jpg' 
          alt='espresso'
          width={700}
          height={700}
        />
      </GalleryImageWrap>
      <GalleryImageWrap>
        <GalleryImage 
          src='/coffee3.jpg' 
          alt='capuccino'
          width={700}
          height={700}
        />
      </GalleryImageWrap>
      <GalleryImageWrap>
        <GalleryImage
          src='/coffee2.jpg' 
          alt='iced latte'
          width={700}
          height={700}
        />
      </GalleryImageWrap>
    </Wrapper>
    
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const GalleryImageWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: black;
`;

const GalleryImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: grayscale(50%);
  transition: transform 250ms;

  &:hover {
    filter: revert;
    transform: scale(1.02);
  }
`;