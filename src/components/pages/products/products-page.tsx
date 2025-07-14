import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'
import { CategoryGroup, ProductSummary } from '@/data/lib/data-manager'
import styled from '@emotion/styled'
import { ProductItemCard } from './product-item-card'
import { Checkbox } from '@/components/shared/checkbox'
import { useMediaQuery } from '@/hooks/use-media-query'
import { MobileFilter } from './mobile-filter'

const ProductHomePageComponent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 2rem;
  padding: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    color: ${({ theme }) => theme.colors.background};
  }
`

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  margin-top: 0.75rem;
  color: ${({ theme }) => theme.colors.background};
`

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  & > li + li {
    margin-top: 0.5rem;
  }
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h1 {
    color: ${({ theme }) => theme.colors.background};
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`

const SortSelect = styled.select`
  padding: 0.5rem;
`

const ProductsGrid = styled.div`
  display: grid;
  gap: 0.75rem;
  align-items: flex-start;
  
  grid-template-columns: repeat(2, 1fr);
  
  @media (min-width: 768px) {
    gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (min-width: 1200px) {
    gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);
  }
`

type ProductsPageProps = {
  categoryGroups: CategoryGroup[]
  products: ProductSummary[]
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ categoryGroups, products, }) => {
  const router = useRouter()
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([])
  const [sortOrder, setSortOrder] = useState<'AZ' | 'ZA'>('AZ')
  const prevQueryRef = useRef<Record<string, string[]>>({})
  const isMobile = useMediaQuery('(max-width: 767px)')

  console.log('================================================')
  console.log('Products:', JSON.stringify(products))
  console.log('================================================')

  useEffect(() => {
    if (!router.isReady) return
    const qs = router.query
    const slugs: string[] = []
    Object.values(qs).forEach((value) => {
      if (Array.isArray(value)) slugs.push(...value)
      else if (typeof value === 'string') slugs.push(value)
    })
    setSelectedSlugs(slugs)
  }, [router.isReady, router.query])

  useEffect(() => {
    const newQuery: Record<string, string[]> = {}
    selectedSlugs.forEach(slug => {
      const grp = categoryGroups.find(g =>
        g.categories.some(c => c.slug === slug)
      )
      if (!grp) return
      newQuery[grp.slug] = newQuery[grp.slug]
        ? [...newQuery[grp.slug], slug]
        : [slug]
    })

    const prev = prevQueryRef.current
    const sameKeys = Object.keys(newQuery).length === Object.keys(prev).length
    const sameValues = sameKeys && Object.entries(newQuery).every(
      ([key, vals]) =>
        Array.isArray(prev[key]) &&
        prev[key]!.length === vals.length &&
        vals.every(v => prev[key]!.includes(v))
    )
    if (sameValues) return

    router.replace(
      { pathname: router.pathname, query: newQuery },
      undefined,
      { shallow: true }
    )
    prevQueryRef.current = newQuery
  }, [selectedSlugs])

  const toggleFilter = (slug: string) =>
    setSelectedSlugs(prev =>
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    )

  const filtered = products
    .filter(prod =>
      categoryGroups.every(group => {
        const sel = selectedSlugs.filter(s =>
          group.categories.some(c => c.slug === s)
        )
        if (sel.length === 0) return true
        return sel.some(s => prod.categorySlugs.includes(s))
      })
    )
    .sort((a, b) =>
      sortOrder === 'AZ'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    )

  return (
    <ProductHomePageComponent>
      {
        !isMobile ?
          <Sidebar>
            {categoryGroups.map(group => (
              <div key={group.id}>
                <SectionTitle>{group.name}</SectionTitle>
                <CategoryList>
                  {group.categories.map(c => (
                    <li key={c.id}>
                      <Checkbox
                        checked={selectedSlugs.includes(c.slug)}
                        onChange={() => toggleFilter(c.slug)}
                      >
                        {c.name}
                      </Checkbox>
                    </li>
                  ))}
                </CategoryList>
              </div>
            ))}
          </Sidebar>

          : <MobileFilter>
            {categoryGroups.map(group => (
              <div key={group.id}>
                <SectionTitle>{group.name}</SectionTitle>
                <CategoryList>
                  {group.categories.map(c => (
                    <li key={c.id}>
                      <Checkbox
                        checked={selectedSlugs.includes(c.slug)}
                        onChange={() => toggleFilter(c.slug)}
                      >
                        {c.name}
                      </Checkbox>
                    </li>
                  ))}
                </CategoryList>
              </div>
            ))}
          </MobileFilter>
      }

      <Main>
        <Toolbar>
          <h1>Produtos</h1>
          <SortSelect
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value as 'AZ' | 'ZA')}
          >
            <option value="AZ">A – Z</option>
            <option value="ZA">Z – A</option>
          </SortSelect>
        </Toolbar>

        <ProductsGrid>
          {filtered.map(prod => (
            <ProductItemCard key={prod.id} product={prod} />
          ))}
        </ProductsGrid>
      </Main>
    </ProductHomePageComponent>
  )
}
