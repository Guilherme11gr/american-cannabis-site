import { Layout } from '@/components/layout/layout'
import { ProductsPage } from '@/components/pages/products/products-page'
import { Categories, CategoryGroup, DataManager, ProductSummary } from '@/data/lib/data-manager'
import { GetStaticProps } from 'next'
import categoriesData from '../../data/categories.json'
import imagesData from '../../data/images.json'
import productsData from '../../data/products.json'

interface ProductsProps {
  categoryGroups: CategoryGroup[]
  products: ProductSummary[]
}

export const getStaticProps: GetStaticProps<ProductsProps> = async () => {
  const dm = new DataManager(productsData, categoriesData as unknown as Categories, imagesData)
  const categoryGroups = dm.getCategoryGroups() ?? []
  console.log('Category Groups:', JSON.stringify(categoryGroups))
  console.log('Products:', JSON.stringify(dm.getAllProductsSummaries()))
  return {
    props: { categoryGroups, products: dm.getAllProductsSummaries() },
  }
}

export default function Products({ categoryGroups, products }: ProductsProps) {
  return (
    <Layout>
      <ProductsPage categoryGroups={categoryGroups} products={products} />
    </Layout>
  )
}
