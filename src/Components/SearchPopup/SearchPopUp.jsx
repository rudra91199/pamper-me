import React from 'react'

const SearchPopUp = ({searchIcon, searchProducts}) => {
  return (
    <div className={`search-popUp ${searchIcon ? 'search-popUp-show':'search-popUp-hide'}`}>SearchPopUp</div>
  )
}

export default SearchPopUp