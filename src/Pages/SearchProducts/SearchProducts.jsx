import Product from "../../Components/Product/Product";
import "./SearchProducts.css";
import { useLocation } from 'react-router-dom'

const SearchProducts = () => {
  const { products, searchText } = useLocation().state;
  console.log(products, searchText);
  return (
    <div className="search-products-container">
      <h3>Showing {products.length} result for {'"' + searchText + '"'}</h3>
      <div className="search-products">
        {
          products.map((product, i) => <Product key={i} product={product} />)
        }
      </div>
    </div>
  )
}

export default SearchProducts