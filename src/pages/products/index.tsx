import { Layout } from '@/components/layout/layout'
import { ProductsPage } from '@/components/pages/products/products-page'
import { CategoryGroup, ProductSummary } from '@/data/lib/data-manager'
import fs from 'fs'
import { GetStaticProps } from 'next'
import path from 'path'

interface ProductsProps {
  categoryGroups: CategoryGroup[]
  products: ProductSummary[]
}

export const getStaticProps: GetStaticProps<ProductsProps> = async () => {
  // === PRODUTOS ===
  const productsDir = path.join(process.cwd(), 'src/data/products')
  const productFiles = fs
    .readdirSync(productsDir)
    .filter((name) => name.endsWith('.json'))

  const productsData: ProductSummary[] = productFiles.map((filename) => {
    const raw = fs.readFileSync(path.join(productsDir, filename), 'utf-8')
    return JSON.parse(raw) as ProductSummary
  })

  // === CATEGORIAS ===
  const categoriesDir = path.join(process.cwd(), 'src/data/categories')
  const categoryFiles = fs
    .readdirSync(categoriesDir)
    .filter((f) => f.endsWith('.json'))

  const allCategories = categoryFiles.map((file) => {
    return JSON.parse(
      fs.readFileSync(path.join(categoriesDir, file), 'utf-8')
    ) as {
      id: number
      parent_id?: number
      slug: string
      name: string
      count?: number
      queue?: string
      carousel?: boolean
    }
  })

  const groupDataArr = allCategories.filter((c) => c.parent_id == null)
  const subDataArr = allCategories.filter((c) => c.parent_id != null)

  const categoryGroups: CategoryGroup[] = groupDataArr.map((groupData) => ({
    id: groupData.id,
    slug: groupData.slug,
    name: groupData.name,
    count: groupData.count ?? 0,
    queue: groupData.queue ?? '',
    carousel: groupData.carousel ?? false,
    categories: subDataArr
      .filter((sub) => sub.parent_id === groupData.id)
      .map((sub) => ({
        id: sub.id,
        slug: sub.slug,
        name: sub.name,
        count: sub.count ?? 0,
        queue: sub.queue ?? '',
        carousel: sub.carousel ?? false,
      })),
  }))

  return {
    props: {
      categoryGroups,
      products: productsData,
    },
  }
}

export default function Products({
  categoryGroups,
  products,
}: ProductsProps) {
  return (
    <Layout>
      <ProductsPage categoryGroups={categoryGroups} products={products} />
    </Layout>
  )
}
