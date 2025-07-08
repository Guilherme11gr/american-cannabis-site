'use client'
import { HomePageComponent } from "@/components/pages/home/home";
import { DataManager, ProductSummary } from "@/data/lib/data-manager";
import productsData from '../data/products.json'
import categoriesData from '../data/categories.json'
import imagesData from '../data/images.json'
import { GetStaticProps } from "next";

interface HomeProps {
  featured: ProductSummary[]
} 

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  // instancia o manager com os JSONs
  const dm = new DataManager(productsData, categoriesData, imagesData)

  // pega todos os summaries e pega os 8 primeiros
  const all = dm.getAllProductsSummaries()
  const featured = all.slice(0, 8)

  return {
    props: { featured },
  }
}

export default function Home({ featured }: HomeProps) {
  return <HomePageComponent featured={featured} />
}
