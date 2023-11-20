import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';
const Dashboard = () => {
    // const [loguser,setLoguser] = useState('');
    const navigate = useNavigate()
    const show = JSON.parse(localStorage.getItem('LoginData'));
    const loguser = show.email;
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem(loguser)) || []);
    // const same = loguser.Productname;
    // console.log(show.email);
    // if(show){
    //     setLoguser(show.email)
    // }
    function logout() {
        localStorage.removeItem("LoginData")
        navigate('/Form');
    }

    const Delete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Your Record will be delete now?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                // console.log(productname)
                const listitems = products.filter((item) =>
                    item.id !== id)
                setProducts(listitems)
                localStorage.setItem(loguser, JSON.stringify(listitems))
            }
        })


    }
    return (
        <div>
            <div className='container mt-5'>
            <br />
                <h1>{show.firstName}</h1>
                <h1>{show.email}</h1>
            </div>
            <div className='container'>
                <button type="submit" className="btn btn-primary m-2" onClick={() => logout()}>Logout</button>
                <button type="submit" className="btn btn-warning m-2" onClick={() => navigate('/Product')}>Products</button>
                <button type="submit" className="btn btn-success m-2" onClick={() => navigate('/addlist')}>Add lists</button>
                <button type="submit" className="btn btn-secondary" onClick={() => navigate('/showlist')}>Show lists</button>
            </div>

            <div className='container'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product MRP</th>
                            <th scope="col" colSpan={"2"}>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ? products.slice(0,5).map((Product, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{Product.Productname}</td>
                                    <td>{Product.Productmrp}</td>
                                    <td><button onClick={() => Delete(Product.id)} className='btn btn-danger'>Delete</button></td>
                                    <td><button onClick={() => navigate(`/Editlist/${Product.id}`)} className='btn btn-info'>  Edit  </button></td>

                                </tr>


                            )

                        })
                            : <h1>No data found</h1>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard
