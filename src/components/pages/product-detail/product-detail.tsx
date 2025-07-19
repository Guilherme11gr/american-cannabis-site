import { Button } from "@/components/shared/button"
import { CarouselDots } from "@/components/shared/carousel-slider-dots"
import { Image, ProductSummary } from "@/data/lib/data-manager"
import { useCarouselSlider } from "@/hooks/use-carousel-slider"
import { useMediaQuery } from "@/hooks/use-media-query"
import { toCurrency } from "@/utils/mask"
import styled from "@emotion/styled"
import NextImage from "next/image"
import Link from "next/link"
import DescriptionAccordion from "./description-accordeon"
import config from '@/data/config.json'

interface ProductDetailPageProps {
  images: Image[]
  product: ProductSummary
}

const ProductDetailContainer = styled.section`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  padding: 2rem 0;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const ProductDataInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 30rem;
  width: 100%;

  .keen-slider__slide {
    flex: 0 0 30rem;
    height: 30rem;
    overflow: hidden;

    @media screen and (max-width: 768px) {
      flex: 0 0 100%;
      height: 23.75rem;
    }
  }

  ul {
    max-width: 30rem;
    li {
      border-radius: 0.75rem;
    }
  }
`

const ProductDescription = styled.div`
  width: 100%;
  margin-top: 1.5rem;

  h2 {
    font-size: 1.5rem !important;
    color: ${({ theme }) => theme.colors.background};
    font-weight: 500 !important;
    margin-bottom: 0.5rem !important;
  }

  p {
    font-size: 1rem !important;
    color: ${({ theme }) => theme.colors.background} !important;
    line-height: 1.75;
    margin-top: 0.5rem;
    text-align: start !important;
    font-weight: 500 !important;
  }
`

const ProductPriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.background};
    font-weight: 500;

    @media screen and (max-width: 768px) {
      text-align: center;
    }
   };

   p {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 800;

    @media screen and (max-width: 768px) {
      text-align: center;
    }
   }

   button {
    width: 100%;
    align-self: center;
    max-width: unset;

    img {
      margin-left: 0.5rem;
    }
   }
`;

const WarningList = styled.ul`
  list-style: none;
  margin-top: 1.5rem;
  
  color: ${({ theme }) => theme.colors.background};

  li {
    font-size: 0.75rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    @media screen and (max-width: 768px) {
      font-size: 0.875rem;
    }
  }
`

const SecurityInfoContainer = styled.div`
  margin-top: 1.5rem;
  width: 100%;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    padding: 0;
    gap: 1rem;

    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;

      span {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.colors.background};
        font-weight: 500;

        strong {
          font-weight: 800;
        }
      }
    }
  }
`

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ images, product }) => {
  const { currentSlide, instanceRef, loaded, sliderRef } = useCarouselSlider({
    slidesPerView: {
      mobile: 1, desktop: 1, spacing: 16
    }
  })

  const getMessage = () => {
    return encodeURIComponent(`${config.productWhatsAppMessagePart1} "${product.name}" ${config.productWhatsAppMessagePart2}`)
  }

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${config.phoneNumber}&text=${getMessage()}`
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <ProductDetailContainer>
      <ProductDataInfo>
        <ul ref={sliderRef} className="keen-slider">
          {images.map((img) => (
            <li key={img.id} className="keen-slider__slide">
              <NextImage
                src={img?.image ? img?.image?.slice(1) : '/sys/not-found.jpg'}
                alt={img.image}
                width={480}
                height={480}
                style={{ borderRadius: '12px', objectFit: 'cover' }}
              />
            </li>
          ))}
        </ul>

        {loaded && instanceRef.current && (
          <CarouselDots currentSlide={currentSlide} instance={instanceRef.current} />
        )}

        {!isMobile && (
          <ProductDescription>
            <h2>Descrição</h2>
            <DescriptionAccordion text={product.description} collapsedLines={12} />
          </ProductDescription>
        )}
      </ProductDataInfo>
      <ProductPriceInfo>
        <h1>{product.name}</h1>
        <p>{toCurrency(product.price)}</p>
        <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
          <Button>
            Comprar agora
            <NextImage src="imgs/arrow-right-svgrepo-com.svg" alt="" height={42} width={42} />
          </Button>
        </Link>

        <WarningList>
          <li>
            <NextImage src="imgs/sys/check-accent-primary.svg" alt="aviso" width={28} height={28} />
            <span>
              Nossos itens podem conter diferentes concentrações de THC e/ou CBD,
              todas devidamente testadas em laboratório.
            </span>
          </li>
          <li>
            <NextImage src="imgs/sys/check-accent-primary.svg" alt="aviso" width={28} height={28} />
            <span>
              A confirmação e finalização do seu pedido são feitas via WhatsApp,
              garantindo agilidade, segurança e um atendimento personalizado.
            </span>
          </li>
          <li>
            <NextImage src="imgs/sys/check-accent-primary.svg" alt="aviso" width={28} height={28} />

            <span>
              Caso o produto desejado esteja temporariamente fora de estoque,
              entraremos em contato para apresentar opções ou informar o prazo de reposição.
            </span>
          </li>
        </WarningList>

        <SecurityInfoContainer>
          <ul>
            <li>
              <NextImage src="imgs/sys/security.svg" alt="segurança" width={28} height={28} />
              <span><strong>100%</strong> seguro</span>
            </li>
            <li>
              <NextImage src="imgs/sys/lab-test.svg" alt="segurança" width={28} height={28} />
              <span>Testado em <strong>laboratório</strong></span>
            </li>
            <li>
              <NextImage src="imgs/sys/whatsapp-primary.svg" alt="segurança" width={28} height={28} />
              <span>Pagamento via <strong>Whatsapp</strong></span>
            </li>
          </ul>
        </SecurityInfoContainer>
        {isMobile && (
          <ProductDescription>
            <h2>Descrição</h2>
            <DescriptionAccordion text={product.description} collapsedLines={12} />
          </ProductDescription>
        )}
      </ProductPriceInfo>
    </ProductDetailContainer >
  )
}
