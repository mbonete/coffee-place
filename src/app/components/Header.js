'use client';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';


export default function Header(){
  return (
    <Wrapper>
      <Title>
        <Image src='/coffee-logo.svg' alt='coffee logo' width='40' height='40'/>
        The Coffee Place
      </Title>
      <Nav>
        <NavLink href='/about-us'>About us</NavLink>
        <NavLink href='/contact'>Contact</NavLink>
        <NavLink href='/products'>Products</NavLink>
        <NavLink href='/shopping-cart'>Shopping Cart</NavLink>
      </Nav>
      <DecorationSpan 
        src='/coffee-variety.png' 
        alt='' 
        width={2000}
        height={200}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 300px;
  background-color: hsl(28, 40%, 76%);
  padding: 24px 48px;
  align-items: start;
`;
const Title = styled.h1`
  display: flex;
  color: black;
  font-size: 2.5rem;
  align-items: center;

  //creates opticxal symmetry
  margin-left: -16px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;

  //creates baseline effect
  margin-top: 22px;

`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  font-size: 1.25rem;

  &:hover {
    text-decoration: revert;
    color: hsl(28, 75%, 13%);
  }
`;

const DecorationSpan = styled(Image)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  object-fit: cover;
`;