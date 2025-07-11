import styled from '@emotion/styled'
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

const AppTitle = styled.h1`
  color: ${({ theme }) => theme.colors.background};
  font-size: 1.5rem;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  line-break: auto;
  line-height: 1.2;
  max-width: 60px;

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
    max-width: 100%;
    padding: 0 1rem;
  }
`

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
        <AppTitle>American Cannabis</AppTitle>
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
