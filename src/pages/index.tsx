import { HomePageComponent } from "@/components/pages/home/home";
import { DataManager, ProductSummary } from "@/data/lib/data-manager";
import fs from 'fs';
import { GetStaticProps } from "next";
import path from "path";
export interface Feedback {
  id: string;
  image: string;
}

interface HomeProps {
  featured: ProductSummary[]
  feedbacks: Feedback[]
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

  const feedbacksDir = path.join(process.cwd(), "src/data/feedbacks");
  const feedbackFiles = fs
    .readdirSync(feedbacksDir)
    .filter((file) => file.endsWith(".json"));

  const feedbacks: Feedback[] = feedbackFiles.map((file) => {
    const fullPath = path.join(feedbacksDir, file);
    const raw = fs.readFileSync(fullPath, "utf-8");
    return JSON.parse(raw) as Feedback;
  });


  return {
    props: { featured, feedbacks },
  }
}

export default function Home({ featured, feedbacks }: HomeProps & { feedbacks: Feedback[] }) {
  return <HomePageComponent featured={featured} feedbacks={feedbacks} />
}
