import { Layout } from '@/components/layout/layout'
import { ProductsPage } from '@/components/pages/products/products-page'
import { Categories, CategoryGroup, DataManager, ProductSummary } from '@/data/lib/data-manager'
import fs from 'fs'
import { GetStaticProps } from 'next'
import path from 'path'
import categoriesData from '../../data/categories.json'
import imagesData from '../../data/images.json'

interface ProductsProps {
  categoryGroups: CategoryGroup[]
  products: ProductSummary[]
}

export const getStaticProps: GetStaticProps<ProductsProps> = async () => {
  const productsDir = path.join(process.cwd(), 'src/data/products')

  // 2) Só pega os arquivos .json
  const files = fs
    .readdirSync(productsDir)
    .filter((name) => name.endsWith('.json'))

  // 3) Monta o array de ProductSummary
  const productsData: ProductSummary[] = files.map((filename) => {
    const fullPath = path.join(productsDir, filename)
    const raw = fs.readFileSync(fullPath, 'utf-8')
    return JSON.parse(raw) as ProductSummary
  })

  // 4) Cria o DataManager como antes
  const dm = new DataManager(
    productsData,
    categoriesData as unknown as Categories,
    imagesData
  )

  const categoryGroups = dm.getCategoryGroups() ?? []
  const products = dm.getAllProducts()

  return {
    props: { categoryGroups, products },
  }
}

export default function Products({ categoryGroups, products }: ProductsProps) {
  return (
    <Layout>
      <ProductsPage categoryGroups={categoryGroups} products={products} />
    </Layout>
  )
}
