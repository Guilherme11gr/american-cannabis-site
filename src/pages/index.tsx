import { HomePageComponent } from "@/components/pages/home/home";
import { DataManager, ProductSummary } from "@/data/lib/data-manager";
import fs from 'fs';
import { GetStaticProps } from "next";
import path from "path";

interface HomeProps {
  featured: ProductSummary[]
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const productsDir = path.join(process.cwd(), 'src/data/products')

  const files = fs
    .readdirSync(productsDir)
    .filter((file) => file.endsWith('.json'))

  const products: ProductSummary[] = files.map((file) => {
    const fullPath = path.join(productsDir, file)
    const raw = fs.readFileSync(fullPath, 'utf-8')
    return JSON.parse(raw) as ProductSummary
  })

  const dm = new DataManager(products)

  const featured = dm.getFeaturedProducts().sort((a, b) => a.name.localeCompare(b.name))

  return {
    props: { featured },
  }
}

export default function Home({ featured }: HomeProps) {
  return <HomePageComponent featured={featured} />
}
