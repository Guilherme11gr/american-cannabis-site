import styled from '@emotion/styled'
import Image from 'next/image';
import Link from 'next/link'

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const NavList = styled.nav`
  display: flex;
  flex-direction: row;
  z-index: 100;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
    list-style: none;
    width: 100%;
    gap: 1rem;

    @media screen and (max-width: 768px) {
      gap: .4rem;
    }
  }

  li {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.background};
    font-family: 'Poppins', sans-serif;
    line-height: 1.5;
    transition: all .15s ease-in-out;
    border-bottom: 1px solid transparent;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
      border-bottom: 1px solid ${({ theme }) => theme.colors.accent};
    }

    &:not(:last-child) {
      margin-right: 30px;
    }

    @media screen and (max-width: 768px) {
      font-size: 0.875rem;
      margin-right: 0;
    } 
  }`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Link href="/">
        <Image
          src="imgs/brand.svg"
          alt="America Cannabis"
          width={180}
          height={80}
          layout='intrinsic'
          style={{ marginTop: '-0.5rem' }}
        />
      </Link>

      <NavList aria-label="Navegação Principal">
        <ul>
          <li><Link href="/">Início</Link></li>
          <li><Link href="/#about">Sobre</Link></li>
          <li><Link href="/products">Produtos</Link></li>
          <li><Link href="/#feedbacks">Feedbacks</Link></li>
        </ul>
      </NavList>
    </HeaderContainer>
  )
}
