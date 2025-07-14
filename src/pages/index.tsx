'use client'
import { HomePageComponent } from "@/components/pages/home/home";
import { Categories, DataManager, ProductSummary } from "@/data/lib/data-manager";
import { GetStaticProps } from "next";
import categoriesData from '../data/categories.json';
import imagesData from '../data/images.json';
import productsData from '../data/products.json';

interface HomeProps {
  featured: ProductSummary[]
} 

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const dm = new DataManager(productsData, categoriesData as unknown as Categories, imagesData)
  const featured = dm.getFeaturedProducts().sort((a, b) => a.name.localeCompare(b.name))

  return {
    props: { featured },
  }
}

export default function Home({ featured }: HomeProps) {
  return <HomePageComponent featured={featured} />
}
