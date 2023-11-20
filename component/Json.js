// import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { data } from './jsonDummy'

const Json = () => {
  // const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const products = data.products
  // useEffect(() => {
    // fetch('https://dummyjson.com/products')
  //     .then(res => res.json())
  //     .then((data) => setProducts(data.products))
  // }, []);

  // let final = products.length > 0? products.slice(0,1).map((items,index)=>{
  //   return items;
  // }):"No Data Found"
  // console.log(final);
  // useEffect(() => {
  //  localStorage.setItem("products", JSON.stringify(products))
  // }, [products]);
  return (
    <div className="index">
      <div class="container mt-5 p-5">
        <div class="row d-flex">
          {products.length > 0 ? products.slice(0,).map((items, index) => {
            return (
              <div class="card col-2 m-2">
                <div class="card-body">
                  <h5 class="card-title">{items.title}</h5>
                  <img src={items.images[0]} alt='some' width="100px" height="150px"></img>
                  <p class="card-text">{items.price}</p>
                  <button class="btn btn-warning">Add Products</button>
                  <div className='mt-5'>
                    <button onClick={() => navigate(`/Product/${items.id}`)} class="btn btn-primary">Show Product</button>
                  </div>
                </div>
              </div>
            )
          }) : <h1>No data found</h1>
          }
        </div>
      </div>
    </div>);
}

export default Json
