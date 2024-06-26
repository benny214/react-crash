import { Loader } from './components/Loader';
import { Error } from './components/Error';
import { Product } from './components/Product'
import { useProducts } from './hooks/products';
import { Modal } from './components/Modal';
import { CreateProduct } from './components/createProduct';



function App() {
  const {products, loading, error} = useProducts()

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader/> }
      {error && <Error error={error}/> }
      {products.map(product => <Product product={product} key={product.id}/>) }

      <Modal title='Create new product'>
        <CreateProduct/>
      </Modal>
    </div>
  )
}

export default App;
