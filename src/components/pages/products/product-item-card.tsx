import { ProductSummary } from '@/data/lib/data-manager'
import { useMediaQuery } from '@/hooks/use-media-query'
import { toCurrency } from '@/utils/mask'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

const ProductItemContainer = styled.div`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.action};
  border-radius: 12px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }

    &:hover {
      /* transform: scale(1.05); */
    }

    a {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h3 {
        margin-top: .5rem;
        font-size: 1rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;       /* número de linhas antes do “…” */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 500;

         @media (max-width: 768px) {
          margin-top: 0.25rem;
          font-size: .75rem;
        }
      }

      h2 {
        font-size: 1.5rem;
        font-weight: 800;
        color: ${({ theme }) => theme.colors.action};
        margin-top: 0.5rem;
        
        @media (max-width: 768px) {
          margin-top: 0.25rem;
          font-size: 1.25rem;
        }
      }
    }

    button {
      margin-top: 0.75rem;
    }

`

export const ProductItemCard: React.FC<{ product: ProductSummary }> = ({ product }) => {
  const isMobile = useMediaQuery('(max-width: 767px)')
  return (
    <ProductItemContainer>
      <Link href={`/products/${product.slug}`}>
        <Image
          src={`imgs/${product.mainPhoto?.image ?? '/sys/not-found.jpg'}`}
          alt={product.name}
          width={isMobile ? 160 : 224}
          height={isMobile ? 160 : 224}
          style={{ borderRadius: '10px', objectFit: 'cover' }}
        />
        <h3>{product.name}</h3>
        <h2>{toCurrency(product.price)}</h2>
      </Link>
    </ProductItemContainer>
  )
}
