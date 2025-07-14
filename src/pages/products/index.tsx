import { Layout } from '@/components/layout/layout'
import { ProductsPage } from '@/components/pages/products/products-page'
import { Categories, CategoryGroup, DataManager, ProductSummary } from '@/data/lib/data-manager'
import fs from 'fs'
import { GetStaticProps } from 'next'
import path from 'path'

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

  const categoriesDir = path.join(process.cwd(), 'src/data/categories')
  const groupSlugs = fs.readdirSync(categoriesDir)

  const categoryGroups: CategoryGroup[] = groupSlugs.map((groupSlug) => {
    const groupPath = path.join(categoriesDir, groupSlug)
    const groupData = JSON.parse(
      fs.readFileSync(path.join(groupPath, 'index.json'), 'utf-8')
    )
    // lê todas as subcategorias (exceto o index.json)
    const subFiles = fs
      .readdirSync(groupPath)
      .filter((f) => f.endsWith('.json') && f !== 'index.json')

    const subcategories = subFiles.map((fileName) => {
      const sub = JSON.parse(
        fs.readFileSync(path.join(groupPath, fileName), 'utf-8')
      )
      return {
        id: sub.id,
        slug: sub.slug,
        name: sub.name,
        count: sub.count ?? 0,
        queue: sub.queue ?? [],
        carousel: sub.carousel ?? [],
      }
    })

    return {
      id: groupData.id,
      slug: groupData.slug,
      name: groupData.name,
      categories: subcategories,
      count: groupData.count ?? 0,
      queue: groupData.queue ?? [],
      carousel: groupData.carousel ?? [],
    }
  })

  const dm = new DataManager(
    productsData,
    categoryGroups as unknown as Categories,
  )

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
