import { useState } from 'react';
import { Products } from './components/Products';
import  products  from './mocks/products.json'
import { Header } from './components/Header'

function App() {
const[initialProducts] = useState(products.products)
const[filters, setFilters] = useState({
  category:'all',
  minPrice: 0
})

const filterProducts = (initialProducts) => {
  return initialProducts.filter(product => {
    return (
      product.price >= filters.minPrice &&
      (
        filters.category === 'all' ||
        product.category === filters.category
      )
    )
  })
}

const filteredProducts = filterProducts(initialProducts)

  return(
    <>
        <Header changeFilters={setFilters}/>
        <Products products={filteredProducts}></Products>
    </>
  )

}

export default App;
