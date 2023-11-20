import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { data } from './jsonDummy';
// import { useState,useEffect } from 'react';
const Id = () => {
    const { id } = useParams();
    const navigate =useNavigate();
    const products = data.products
    const items = products.find((items) => items.id.toString() === id)
    // const [products, setProducts] = useState([]);
    // let id=params.id;
    // console.log(id)
    // useEffect(() => {
    //     fetch('https://dummyjson.com/products/id')
    //       .then(res => res.json())
    //       .then((data) => setProducts(data.products))
    //   }, []);
    //   const getItems = products.find((items) => items.id.toString()===id)
    return (
        <div className="d-grid justify-content-center mt-5 p-5">
            <h1>   </h1>
            <div class="card-body">
                <h5 class="card-title">{items.title}</h5>
                <img src={items.images[0]} alt='some'></img>
                <p class="card-text">{items.price}</p>
                <button onClick={()=>navigate('/Product')} class="btn btn-primary">Go back</button><span>   </span>
                <button class="btn btn-warning">Add Products</button>
            </div>
            {/* <div class="card-body">
                  <h5 class="card-title">{getItems.title}</h5>
                  <img src={getItems.images[0]} alt='some' width="100px" height="150px"></img>
                  <p class="card-text">{getItems.price}</p>
                  <button class="btn btn-warning">Add Products</button>
    </div> */}
        </div>
    )
}

export default Id
