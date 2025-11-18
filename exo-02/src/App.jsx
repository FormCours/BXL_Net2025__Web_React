import './App.css'
import Header from './ui/Header/Header'
import products from './data/product.json';import ProductList from './components/ProductList/ProductList';
ProductList

function App() {

  return (
    <>
      <Header />
      <h2>Liste des produits</h2>
      <ProductList products={products} />
    </>
  )
}

export default App
