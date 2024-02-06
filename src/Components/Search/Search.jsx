import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Search = () => {
    const [searchedProducts,setSearchedProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/getProductsByCategory?search`).then(res => setSearchedProducts(res.data));
    },[]);
  return (
    <div>
        <p>Search By Name</p>
        <input type="text" />
        <button>search</button>
    </div>
  )
}

export default Search