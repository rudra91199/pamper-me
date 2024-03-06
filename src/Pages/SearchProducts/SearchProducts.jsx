import Product from "../../Components/Product/Product";
import Service from "../../Components/Service/Service";
import "./SearchProducts.css";
import { useLocation } from 'react-router-dom'

const SearchProducts = () => {
  const { products, searchText,searchTab } = useLocation().state;
  console.log(products, searchTab);
  return (
    <div className="search-products-container">
      <h3>Showing {products.length} result for {'"' + searchText + '"'}</h3>
      <div className="search-products">
        {
          searchTab==="services"? products.map((product, i) =><Service key={i} service={product}/>):
          products.map((product, i) =><Product key={i} product={product}/>)
        }
      </div>
    </div>
  )
}

export default SearchProducts