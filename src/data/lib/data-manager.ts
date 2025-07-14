export interface Category {
  id: number
  name: string
  slug: string
  count: number
  queue: string
  carousel: boolean
}

export interface ImagesData {
  images: Image[]
}

export interface ProductsData {
  products: Product[]
}

export interface Categories {
  categories: CategoryGroup[]
}

export interface CategoryGroup {
  id: number
  name: string
  slug: string
  count: number
  queue: string
  carousel: boolean
  categories: Category[]
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
  featured?: boolean
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
  featured?: boolean
  description: string
  mainPhoto: Image | null
  categorySlugs: string[]
  images: Image[] | null
}

export class DataManager {
  private flatCategories: Category[] | null = null

  constructor(
    private products: ProductsData,
    private categoryGroups: Categories | null,
    private images: ImagesData
  ) {
    if (categoryGroups) {
      this.flatCategories = categoryGroups.categories.flatMap(g => g.categories)
    }
  }

  getCategoryGroups(): CategoryGroup[] | null {
    return this.categoryGroups?.categories ?? null
  }

  getSubcategoriesByGroupId(groupId: number): Category[] {
    const grp = this.categoryGroups?.categories.find(g => g.id === groupId)
    return grp ? grp.categories : []
  }

  getAllCategories(): Category[] | null {
    return this.flatCategories ?? null
  }

  getCategoriesByIds(ids: number[]): Category[] {
    return this.flatCategories?.filter(c => ids.includes(c.id)) ?? []
  }

  getProductById(id: number): Product | undefined {
    return this.products.products.find(p => p.id === id)
  }

  getProductBySlug(slug: string): Product | undefined {
    return this.products.products.find(p => p.slug === slug)
  }

  getPhotosByProductId(productId: number): Image[] {
    return this.images.images.filter(img => img.product_id === productId)
  }

  getProductWithRelationsById(id: number): ProductWithRelations | null {
    const prod = this.getProductById(id)
    if (!prod || !prod.category_ids) return null
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

  getAllProductsSummaries(): ProductSummary[] {
    return this.products.products.map(p => ({
      id: p.id,
      name: p.name,
      slug: p.slug,
      price: p.price,
      code: p.code,
      featured: p.featured ?? false,
      description: p.description,
      mainPhoto: this.getPhotosByProductId(p.id)[0] || null,
      images: this.getPhotosByProductId(p.id),
      categorySlugs: this.getCategoriesByIds(p.category_ids ?? []).map(c => c.slug),
    }))
  }

  getFeaturedProducts(): ProductSummary[] {
    return this.getAllProductsSummaries().filter(p => p.featured)
  }
}
