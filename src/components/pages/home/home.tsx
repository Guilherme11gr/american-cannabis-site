import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/shared/button";
import styled from "@emotion/styled";
import { CustomerFeedbackSection } from "./components/customer-feedback-section";
import { HighlightsProductsSection } from "./components/highlights-products-section";
import { ProductSummary } from "@/data/lib/data-manager";
import NextLink from "next/link";
import HeroRotator from "./components/hero-rotator";
import { keyframes } from "@emotion/react";
import Image from "next/image";
import { Feedback } from "@/pages";
import BrandChangeModal from "./components/brand-change-modal";

const floatAnimation = keyframes`
  0%   { transform: translateY(0)   rotate(0deg); }
  50%  { transform: translateY(-8px) rotate(1deg); }
  100% { transform: translateY(0)   rotate(0deg); }
`

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
  margin-top: 1rem;

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
    width: 40.125rem !important;
    top: -3.375rem;
    right: -7.0625rem;
    will-change: transform;
    animation: ${floatAnimation} 7s ease-in-out infinite;
    opacity: 0.95;

    @media screen and (max-width: 768px) {
      position: unset;
      top: 0;
      right: 0;
      width: 100%;
      margin-bottom: -3.125rem;
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
      gap: 1rem;
    }

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      animation: bounce-in 0.8s cubic-bezier(.17,.67,.83,.67);

      &:last-of-type {
        h3 {
          margin-top: 0.5rem;
        }
      }

      @media screen and (max-width: 768px) {
        &:last-of-type {
          a {
            h3 {
              margin-top: 0.5rem;
            }
          }
          img {
            /* width: 5.25rem; */
          }
        }
      }

      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        
      }

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
        color: ${({ theme }) => theme.colors.primaryLight};
        margin-top: 1rem;
        font-weight: bold;
        transition: transform 0.15s ease-in-out;

        @media screen and (max-width: 768px) {
          font-size: 1rem;
        }
      }

      img {
        width: 12.5rem;
        border-radius: 50%;
        transition: transform 0.15s ease-in-out;

        @media screen and (max-width: 768px) {
          width: 4.25rem;
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
      display: none;
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
      background-image: url('imgs/background-ilustracao-about-us.png');
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
  feedbacks?: Feedback[];
}

export const HomePageComponent: React.FC<HomePageComponentProps> = ({ featured, feedbacks }) => {
  return (
    <Layout>
      <InitialSectionContainer>
        <TitleContainer>
          <HeroRotator />
          <CTAButtonContainer>
            <NextLink href={'products'} style={{ width: '100%' }}>
              <Button>
                Confira nossos produtos
                <Image src="imgs/arrow-right-svgrepo-com.svg" alt="" height={42} width={42} />
              </Button>
            </NextLink>
          </CTAButtonContainer>
        </TitleContainer>
        <GummyImageContainer>
          <Image
            src="imgs/gummy-home.png"
            alt="Gummy Bear"
            width={300}
            height={300}
            layout="responsive"
          />
        </GummyImageContainer>
      </InitialSectionContainer>
      <CategoriesSectionContainer>
        <ul>
          <li>
            <NextLink href="products?group=descartaveis">
              <img src="imgs/categories-pods.png" alt="Categoria Pods" />
              <h3>Pods</h3>
            </NextLink>
          </li>
          <li>
            <NextLink href="products?group=refil">
              <img src="imgs/categories-refil.png" alt="Categoria Refil" />
              <h3>Refil</h3>
            </NextLink>
          </li>
          <li>
            <NextLink href="products?group=gummy">
              <img src="imgs/categories-gummy.png" alt="Categoria Gummy" />
              <h3>Gummy</h3>
            </NextLink>
          </li>
          <li>
            <NextLink href="products?group=cbd">
              <img src="imgs/categories-cbd.png" alt="Categoria CBD" />
              <h3>Medicinais</h3>
            </NextLink>
          </li>
        </ul>
      </CategoriesSectionContainer>

      <HighlightsProductsSection featuredProducts={featured} />

      <AboutCompanyContainer id="about">
        <AboutCompanyCard>
          <div>
            <h3>Sobre a America Cannabis</h3>
            <br />
            <p>Somos especialistas na importação e comercialização de produtos canábicos premium, de óleos e extratos a gomas e itens de bem-estar, todos rigorosamente selecionados e testados para oferecer qualidade, segurança e inovação.</p>
            <br />
            <p>Com logística ágil e transparente, entregamos para todo o Brasil, garantindo a melhor experiência de compra e suporte dedicado.</p>
          </div>
          <img src="imgs/ilustracao-sobre-nos.png" alt="Sobre a empresa" />
        </AboutCompanyCard>
      </AboutCompanyContainer>

      <CustomerFeedbackSection feedbacks={feedbacks!} />

      <BrandChangeModal />
    </Layout>
  )
}
