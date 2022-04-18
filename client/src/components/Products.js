import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {popularProducts} from '../data'
import Product from './Product'
import axios from 'axios'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({cat,filters,sort}) => {
  const [products,setProducts] = useState([]);
  const [filteredProducts,setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(cat 
          ? `http://localhost:5000/api/products?=${cat}` 
          : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {
        
      }
    }
    getProducts();
  },[cat]);

  // useEffect(() => {
  //   console.log(products[0]._id);
  //   cat && setFilteredProducts( 
  //     products.filter(item => 
  //       Object.entries(filters).every(([key,value]) => 
  //       item[key].includes(value)
  //       ))
  //   )
    
  // },[products,cat,filters])

  return (
    <Container>
        {
            filteredProducts.map((item) => (
                <Product key={item.id} item={item}/>
            ))
        }
    </Container>
  )
}

export default Products