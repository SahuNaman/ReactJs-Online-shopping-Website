import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'


const Home = (props) => {
  
  const handlecart=(ans)=>{
    console.log(ans)
    let updated = {...ans, quantity:1}
    props.getCartItem(updated)
  }
    const [pro,setPro] = useState([])
  let getData = async ()=>{
    let res = await fetch('https://dummyjson.com/products/search?q=phone');
    let data = await res.json();
    console.log(data.products)
    setPro(data.products);
  }
  useEffect(()=>{
    getData()
  },[])

  const handle=()=>{
    console.log("g")
  }
  
  return (
    <div className='nk row d-flex justify-content-center gap-3'>
   
      {pro.map((ele)=>{
        return <div className='an card'><h4 className='text-truncate'>{ele.title } </h4>
               <img className='bg-dark' src={ele.images} width={"200px"} height={"200px"}/>
               <p>price : {ele.price} $</p>
               <div><Link className='btn btn-success' state={ele} to="/single">View Product</Link>
               <Link  className='btn btn-info ms-3'onClick={()=>handlecart(ele)} >Add To Carts</Link></div>
        </div>
       

      })}
    </div>
  )
}

export default Home
