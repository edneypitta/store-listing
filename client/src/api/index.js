const baseUrl = process.env.API_URL || 'http://localhost:3000'

const fetchCategories = async () => {
  const result = await fetch(`${baseUrl}/categories`)
  const { categories } = await result.json()

  return categories
}

const fetchStores = async ({ name }) => {
  const result = await fetch(`${baseUrl}/stores?category=${name}`)
  const { stores } = await result.json()

  return stores
}

export const fetchData = async () => {
  const categories = await fetchCategories()
  const stores = await Promise.all(categories.map(fetchStores))

  return categories.map((category, index) => ({ ...category, stores: stores[index] }))
}

