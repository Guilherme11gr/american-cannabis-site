import { Layout } from '@/components/layout/layout'
import { ProductDetailPage } from '@/components/pages/product-detail/product-detail'
import { Image, ProductSummary } from '@/data/lib/data-manager'
import fs from 'fs'
import { GetStaticPaths, GetStaticProps } from 'next'
import path from 'path'

interface ProductDetailProps {
  images: Image[]
  product: ProductSummary
}

export const getStaticPaths: GetStaticPaths = async () => {
  const productsDir = path.join(process.cwd(), 'src/data/products')
  const files = fs
    .readdirSync(productsDir)
    .filter((name) => name.endsWith('.json'))

  const paths = files.map((file) => {
    const slug = file.replace(/\.json$/, '')
    return { params: { slug } }
  })

  return {
    paths,
    fallback: false // ou 'blocking' se você quiser gerar páginas sob demanda
  }
}

export const getStaticProps: GetStaticProps<ProductDetailProps> = async ({ params }) => {
  const slug = params!.slug as string
  const filePath = path.join(process.cwd(), 'src/data/products', `${slug}.json`)

  if (!fs.existsSync(filePath)) {
    return { notFound: true }
  }

  const raw = fs.readFileSync(filePath, 'utf-8')
  const product = JSON.parse(raw) as ProductSummary

  // suas imagens já estão dentro de product.images
  const images = product.images ?? []


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
