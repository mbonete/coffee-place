'use client';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart } from 'react-feather';



export default function Header(){
  return (
    <Wrapper>
      <LogoLink href='/'>
        <Title>
          <Image src='/coffee-logo.svg' alt='coffee logo' width='40' height='40'/>
          The Coffee Place
        </Title>
      </LogoLink>
     
      <Nav>
        <NavLink href='/products'>Products</NavLink>
        <NavLink href='/about'>About us</NavLink>
        <NavLink href='/contact'>Contact</NavLink>
        <NavLink href='/shopping-cart'><ShoppingCart/></NavLink>
      </Nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 150px;
  padding: 24px 48px;
  align-items: start;
`;
const LogoLink = styled(Link)`
  text-decoration: none;
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
  gap: 64px;

  //creates baseline effect
  margin-top: 22px;

`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 700;

  &:hover {
    border-bottom: 3px solid hsl(39, 100%, 38%);
  }
`;

