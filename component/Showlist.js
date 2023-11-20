import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const Showlist = () => {
    const navigate = useNavigate()
    const show = JSON.parse(localStorage.getItem('LoginData'));
    const loguser = show.email;
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem(loguser)) || []);
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
    <div className='container mt-5 p-5'><br/>
      <h1><center>Lists</center></h1><br />
      <center><button type="submit" className="btn btn-success m-2" onClick={() => navigate('/addlist')}>Add lists</button></center>
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
                        {products.length > 0 ? products.map((Product, index) => {
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
  )
}

export default Showlist
