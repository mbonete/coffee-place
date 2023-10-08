'use client';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart } from 'react-feather';



export default function Header(){
  return (
    <Wrapper>
      <LogoLink href='/'>
        <LogoImage src='/coffee-logo.svg' alt='coffee logo' width='40' height='40'/>
        <Title>The Coffee Place</Title>
      </LogoLink>
     
      <Nav>
        <NavLink href='/products'>Products</NavLink>
        <NavLink href='/about'>About us</NavLink>
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

  @media(max-width: 850px) {
    padding: 16px 24px;
    flex-direction: column;
    align-items: center;
    height: 130px;
    background-color: hsl(45, 20%, 94%);
  }
`;
const LogoLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 16px;

  //creates opticxal symmetry
  margin-left: -16px;

  @media(max-width: 850px) {
    padding: 8px;
    gap: 4px;
  }
`;

const Title = styled.h1`
  color: black;
  font-size: 2.5rem;

  @media(max-width: 850px) {
    font-size: 1rem;
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
  gap: 64px;

  //creates baseline effect
  margin-top: 22px;

  @media(max-width: 850px) {
    gap: 48px;
    align-items: baseline;
    justify-content: center;
    white-space: nowrap;
    margin: 0 auto;
    margin-bottom: 8px;
  }

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

  @media(max-width: 850px) {
    font-size: 1.15rem;
    text-transform: revert;


    &:hover {
      border-bottom: revert;
      color: hsl(39, 100%, 38%);
    }

  }
`;

