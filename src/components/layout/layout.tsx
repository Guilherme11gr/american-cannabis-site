import styled from "@emotion/styled";
import { Header } from "./header";
import { Footer } from "./footer";

const LayoutContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 1.5rem;
`;

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </LayoutContainer>
  )
}
