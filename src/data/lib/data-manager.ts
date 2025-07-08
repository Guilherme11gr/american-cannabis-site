// lib/data.ts

export interface Category {
  id: number
  name: string
  slug: string
  image: string | null
  description: string | null
}

export interface Image {
  id: number
  image: string
  product_id: number
}

export interface Product {
  id: number
  code: string
  name: string
  slug: string
  price: number
  stoke: number
  description: string
  category_ids: number[] | null
  photo_ids: number[] | null
}

export interface ProductWithRelations extends Product {
  categories: Category[]
  photos: Image[]
}

export interface ProductSummary {
  id: number
  name: string
  slug: string
  price: number
  code: string
  description: string
  mainPhoto: Image | null
  categorySlugs: string[]
}

export class DataManager {
  constructor(
    private products: Product[],
    private categories: Category[],
    private images: Image[]
  ) { }

  /** Retorna o produto puro (sem relações) */
  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id)
  }

  getProductBySlug(slug: string): Product | undefined {
    return this.products.find(p => p.slug === slug)
  }

  /** Pega categorias pelo array de ids */
  getCategoriesByIds(ids: number[]): Category[] {
    return this.categories.filter(c => ids.includes(c.id))
  }

  /** Pega todas as imagens de um produto */
  getPhotosByProductId(productId: number): Image[] {
    return this.images.filter(img => img.product_id === productId)
  }

  /**
   * Monta um produto completo, com categorias e fotos
   * @returns null se não encontrar
   */
  getProductWithRelationsById(id: number): ProductWithRelations | null {
    const prod = this.getProductById(id)
    if (!prod || prod.category_ids === null || prod.photo_ids === null) return null
    return {
      ...prod,
      categories: this.getCategoriesByIds(prod.category_ids),
      photos: this.getPhotosByProductId(prod.id),
    }
  }

  getProductWithRelationsBySlug(slug: string): ProductWithRelations | null {
    const prod = this.getProductBySlug(slug)
    return prod ? this.getProductWithRelationsById(prod.id) : null
  }

  /**
   * Retorna um array com dados resumidos,
   * ideal para listagem / página de produtos
   */
  getAllProductsSummaries(): ProductSummary[] {
    return this.products.map(p => ({
      id: p.id,
      name: p.name,
      slug: p.slug,
      price: p.price,
      code: p.code,
      description: p.description,
      mainPhoto: this.getPhotosByProductId(p.id)[0] || null,
      categorySlugs: this.getCategoriesByIds(p.category_ids ?? []).map(c => c.slug),
    }))
  }
}
