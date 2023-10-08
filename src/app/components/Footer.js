'use client';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer(){
  return (
    <Wrapper>
      <MaxWidthWrapper>
      <LogoLink href='/'>
        <LogoImage src='/coffee-logo.svg' alt='coffee logo' width='40' height='40'/>
        <Title>The Coffee Place</Title>
      </LogoLink>
        <Nav>
          <Title>Navigation</Title>
          <NavLink href='/about-us'>About us</NavLink>
          <NavLink href='/products'>Products</NavLink>
          <NavLink href='/shopping-cart'>Shopping Cart</NavLink>
        </Nav>
        <Nav>
          <Title>Resources</Title>
          <NavLink href=''>Our blog</NavLink>
          <NavLink href=''>Network</NavLink>
          <NavLink href=''>Partneships</NavLink>
          <NavLink href=''>Social media</NavLink>
        </Nav>
      </MaxWidthWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  background-color: hsl(28.16, 40.5%, 76.3%);
  padding: 24px; 
`;

const MaxWidthWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 48px;
  margin: 0 auto;

  //article width
  max-width: 848px;

  @media(max-width: 850px) {
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-right: auto;

  //creates opticxal symmetry
  margin-left: -16px;

  @media(max-width: 850px) {
    padding: 8px;
    gap: 4px;
    margin-right: 0;
  }
`;

const Title = styled.h3`
  color: black;
  font-size: 1.15rem;
  margin-bottom: 8px;
  
  @media(max-width: 850px) {
    font-size: 1rem;
    margin-bottom: 0;
  }
`;

const LogoImage = styled(Image)`
  color: black;
  font-size: 2.5rem;

  @media(max-width: 850px) {
    height: 20px;
    width: 20px;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  gap: 8px;

  @media(max-width: 850px) {
    align-items: center;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1rem;

  &:hover {
    text-decoration: revert;
    color: hsl(28, 75%, 13%);
  }
`;