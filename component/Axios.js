import React from 'react'
import { useState } from 'react';
import axios from 'axios'
const Axios = () => {
    const [products, setProducts] = useState([]);
    const urlss = 'https://jsonplaceholder.typicode.com/posts'
    axios.get(urlss).then((res) => {
        // console.log(res.data);
        setProducts(res.data);
        // console.log(products);

    })

    return (
        <div className='container mt-5'>
            <br />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">title</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? products.slice(0, 5).map((Product) => {
                        return (
                            <tr>
                                <td>{Product.title}</td>
                            </tr>


                        )

                    })
                        : <h1>No data found</h1>
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Axios
