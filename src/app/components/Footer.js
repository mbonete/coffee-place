'use client';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer(){
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Logo>
          <Image src='/coffee-logo.svg' alt='coffee logo' width='40' height='40'/>
          The Coffee Place
        </Logo>
        <Nav>
          <Title>Navigation</Title>
          <NavLink href='/about-us'>About us</NavLink>
          <NavLink href='/contact'>Contact</NavLink>
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
  width: 848px;
`;

const Title = styled.h3`
  color: black;
  font-size: 1.15rem;
  margin-bottom: 8px;
`;

const Logo = styled.h3`
  color: black;
  font-size: 1.15rem;
  margin-right: auto;
  display: flex;
  align-items: center;

  //optical baseline alignment with nav components
  margin-top: -5px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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