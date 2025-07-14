/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/shared/button'
import { CarouselDots } from '@/components/shared/carousel-slider-dots'
import { ProductSummary } from '@/data/lib/data-manager'
import { useCarouselSlider } from '@/hooks/use-carousel-slider'
import { toCurrency } from '@/utils/mask'
import styled from '@emotion/styled'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'
import Link from 'next/link'

const HighlightsProductsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  h4 {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.primaryLight};
    margin-bottom: 1rem;
  }

  ul {
    width: 100%;
    margin-top: 1rem;
  }

  li {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.action};
    padding: 1rem 1rem;
    border-radius: 12px;
    max-width: 280px;

    &:hover {
      transform: scale(1.05);
    }

    a {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h3 {
        margin-top: 0.5rem;
        font-weight: 500;
        display: -webkit-box;
        -webkit-line-clamp: 2;       /* número de linhas antes do “…” */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 500;
      }

      h2 {
        font-size: 2rem;
        font-weight: 800;
        color: ${({ theme }) => theme.colors.action};
        margin-top: 0.5rem;
      }
    }

    button {
      margin-top: 0.5rem;
    }

    img {
      width: 100%;
      border-radius: 12px;
      object-fit: cover;
    }
  }
`

const CtaButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;  
  margin-top: 2rem;

  button {
    margin-top: 1rem;
  }
`

export const HighlightsProductsSection: React.FC<{ featuredProducts: ProductSummary[] }> = ({ featuredProducts }) => {
  const { sliderRef, instanceRef, currentSlide, loaded } = useCarouselSlider<HTMLUListElement>()

  return (
    <HighlightsProductsContainer>
      <h4>Destaques</h4>

      <ul ref={sliderRef} className="keen-slider">
        {featuredProducts.map((product, idx) => (
          <li className="keen-slider__slide" key={idx}>
            <Link href={`/products/${product.slug}`} className="product-link">
              <Image src={`${product.mainPhoto?.image}`} width={277} height={277} alt={product.name} />
              <h3>{product.name}</h3>
              <h2>{toCurrency(product.price)}</h2>
              <Button>Ver Detalhes</Button>
            </Link>
          </li>
        ))}
      </ul>

      {loaded && instanceRef.current && (
        <CarouselDots currentSlide={currentSlide} instance={instanceRef.current} />
      )}

      <CtaButtonContainer>

        <Link href={'/products'}>
          <Button>
            Ver todos os produtos
            <img src="imgs/arrow-right-svgrepo-com.svg" alt="" height={42} />
          </Button>
        </Link>
      </CtaButtonContainer>
    </HighlightsProductsContainer>
  )
}
