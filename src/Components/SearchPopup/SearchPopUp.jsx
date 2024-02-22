import React from 'react'
import icon from "../../assets/Images/Logo/logo.png"

const SearchPopUp = ({ searchIcon, searchedProducts, searchText }) => {
    return (
        <div onClick={(e) => e.stopPropagation()} className={`search-popUp ${searchText.length > 2 ? 'search-popUp-show' : 'search-popUp-hide'} ${searchedProducts == 0 && 'no-match'}`}>
            {
                searchedProducts.length == 0 ? <p>No Matches Found</p> :
                    searchedProducts?.map((product, i) => <div key={i}>
                        <img src={product?.images[0].src} alt="" />
                        <div>
                            <h4 className='popUp-product-title'>{product.name}</h4>
                            <p>Price: {product.price}</p>
                        </div>
                    </div>)}
        </div>
    )
}

export default SearchPopUp