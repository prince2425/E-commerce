import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Product from '../Products/Product'

const Home = () => {

  const handleScroll = () =>{
    const section = document.getElementById('product-section');

    if(section){
      section.scrollIntoView({behavior: 'smooth'});
    }
  }


  return (
    <div>
        <Navbar 
        handleScroll= {handleScroll}
        />
        <Banner />
        <Product />
    </div>
  )
}

export default Home