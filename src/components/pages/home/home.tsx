/* eslint-disable @next/next/no-img-element */
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/shared/button";
import styled from "@emotion/styled";
import { CustomerFeedbackSection } from "./components/customer-feedback-section";
import { HighlightsProductsSection } from "./components/highlights-products-section";
import { ProductSummary } from "@/data/lib/data-manager";

const InitialSectionContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  position: relative;

    @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  margin-top: 4rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    margin-top: 2rem;
  }

  h1 {
    font-size: 3.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.accent};
    line-height: 1.2;

    @media screen and (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.background};
    line-height: 1.5;
    margin-top: 0.5rem;
  }
`;

const CTAButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 1.5rem;

  img {
    margin-left: 0.5rem;
  }
`

const GummyImageContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  img {
    position: absolute;
    width: 642px;
    top: -4.375rem;
    right: -97px;

    @media screen and (max-width: 768px) {
      position: unset;
      top: 0;
      right: 0;
      width: 100%;
    }
  }
`;

const CategoriesSectionContainer = styled.div`
  width: 100%;
  margin-top: 10.25rem;

  @media screen and (max-width: 768px) {
    margin-top: 1.5rem;
  }

  @keyframes bounce-in {
    0%   { transform: scale(0.3); opacity: 0; }
    60%  { transform: scale(1.1); opacity: 1; }
    100% { transform: scale(1); }
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin-top: 2rem;
    gap: 2rem;

    @media screen and (max-width: 768px) {
      align-items: flex-start;
      gap: 0.75rem;
    }

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      animation: bounce-in 0.8s cubic-bezier(.17,.67,.83,.67);


      &:hover {
        img {
          transform: scale(1.05);
        }

        h3 {
          transform: scale(1.05); 
        }
      }

      h3 {
        font-size: 1.5rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.primary};
        margin-top: 0.5rem;
        font-weight: bold;
        transition: transform 0.15s ease-in-out;

        @media screen and (max-width: 768px) {
          font-size: 1rem;
        }
      }

      img {
        height: 14rem;
        border-radius: 50%;
        transition: transform 0.15s ease-in-out;

        @media screen and (max-width: 768px) {
          width: 120px;
          height: auto;
        }
      }
    }
  }
`

export const AboutCompanyContainer = styled.div`
  width: 100%;
   display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const AboutCompanyCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  border-radius: 12px;
  margin-top: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.backgroundLight};

  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media screen and (max-width: 768px) {
      width: 100%;
      margin-bottom: 2rem;
    }
  }

  img {
    width: 29.0313rem;
    height: auto;
    border-radius: 10px;
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(2%, 10%);
    @media screen and (max-width: 768px) {
      display: none; /* esconde a imagem no mobile */
    }
  }

  h3 {
    font-size: 2rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.darkPurple};
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.darkPurple};

    @media screen and (max-width: 768px) {
     font-weight: 500;
    }
  }

  @media screen and (max-width: 768px) {
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url('/imgs/background-ilustracao-about-us.png');
      background-repeat: repeat;
      background-size: 250%;
      opacity: 0.1;
      z-index: 0;
    }

    > div,
    h3,
    p,
    img {
      position: relative;
      z-index: 1;
    }
  }
`

type HomePageComponentProps = {
  featured: ProductSummary[]
}
export const HomePageComponent: React.FC<HomePageComponentProps> = ({ featured }) => {
  console.log(featured)
  return (
    <Layout>
      <InitialSectionContainer>
        <TitleContainer>
          <h1>Transparência e confiabilidade</h1>
          <h2>Todos os ingredientes testados em laboratório.</h2>
          <CTAButtonContainer>
            <Button>
              Confira nossos produtos
              <img src="/imgs/arrow-right-svgrepo-com.svg" alt="" height={42} />
            </Button>
          </CTAButtonContainer>
        </TitleContainer>
        <GummyImageContainer>
          <img src="/imgs/gummy-home.png" alt="Gummy Bear" />
        </GummyImageContainer>
      </InitialSectionContainer>
      <CategoriesSectionContainer>
        <ul>
          <li>
            <a href="">
              <img src="/imgs/categories-pods.png" alt="Seta para a direita" />
              <h3>THC Pods</h3>
            </a>
          </li>
          <li>
            <a href="">
              <img src="/imgs/categories-refil.png" alt="Seta para a direita" />
              <h3>THC Refis</h3>
            </a>
          </li>
          <li>
            <a href="">
              <img src="/imgs/categories-gummy.png" alt="Seta para a direita" />
              <h3>THC Gummies</h3>
            </a>
          </li>
        </ul>
      </CategoriesSectionContainer>

      <HighlightsProductsSection featuredProducts={featured} />

      <AboutCompanyContainer>
        <AboutCompanyCard>
          <div>
            <h3>Sobre a American Cannabis</h3>
            <br />
            <p>Somos especialistas na importação e comercialização de produtos canábicos premium, de óleos e extratos a gomas e itens de bem-estar, todos rigorosamente selecionados e testados para oferecer qualidade, segurança e inovação.</p>
            <br />
            <p>Com logística ágil e transparente, entregamos para todo o Brasil, garantindo a melhor experiência de compra e suporte dedicado.</p>
          </div>
          <img src="/imgs/ilustracao-sobre-nos.png" alt="Sobre a empresa" />
        </AboutCompanyCard>
      </AboutCompanyContainer>

      <CustomerFeedbackSection />
    </Layout>
  )
}
