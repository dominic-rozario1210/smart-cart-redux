import React from 'react'
import Banner from '../components/Banner'
import ProductCard from '../components/ProductCard'
import productsData from "../data/productsData.json"
import "../App.css"

const Home = () => {
  return (
     <>
      <Banner/>
      <div className='product-card-container'>
        
          {
            productsData.products.map((product) =>(
              <ProductCard 
                 product={product}
                 key={product.key}
              />
            ))
          }
      </div>
    </>
  )
}

export default Home
