import { Layout } from '@/components/layout/layout'
import { DataManager, Image, Product, ProductSummary } from '@/data/lib/data-manager'
import { GetStaticPaths, GetStaticProps } from 'next'
import imagesData from '../../../data/images.json'
import productsData from '../../../data/products.json'
import { ProductDetailPage } from '@/components/pages/product-detail/product-detail'

interface ProductDetailProps {
  images: Image[]
  product: Product
}

export const getStaticPaths: GetStaticPaths = async () => {
  const dm = new DataManager(productsData, null, imagesData)
  const products = dm.getAllProductsSummaries()

  const paths = products.map((product: ProductSummary) => ({
    params: { slug: product.slug }
  }))

  return {
    paths,
    fallback: false // ou 'blocking' se você quiser gerar páginas sob demanda
  }
}

export const getStaticProps: GetStaticProps<ProductDetailProps> = async ({ params }) => {
  const slug = params?.slug as string
  const dm = new DataManager(productsData, null, imagesData)
  const product = dm.getProductBySlug(slug)

  if (!product) {
    return {
      notFound: true
    }
  }

  const images = dm.getPhotosByProductId(product.id)

  return {
    props: {
      images,
      product
    },
  }
}

export default function ProductDetail({ images, product }: ProductDetailProps) {
  return (
    <Layout>
      <ProductDetailPage images={images} product={product} />
    </Layout>
  )
}
