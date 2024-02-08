import React from 'react'
import icon from "../../assets/Images/Logo/logo.png"

const SearchPopUp = ({searchedProducts}) => {
  return (
    <div className='search-popUp'>
      {searchedProducts?.map((product,i) => <div key={i}>
        <img src={product?.images?.src || icon} alt="" />
        <div>
        <h4>{product.name}</h4>
        <p>Price: {product.price}</p>
        </div>
      </div>)}
    </div>
  )
}

export default SearchPopUp