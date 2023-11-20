import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div>
            {/* <div className='d-flex justify-content-between'> */}
            {/* <div> */}
            <navbar class="navbar fixed-top navbar-dark bg-dark button button-hover">
                <ul class="nav justify-content-right">
                    <li class="nav-item">
                        <button onClick={()=>navigate('/')} class="nav-link text-white btn btn-outline-warning">Balan</button>
                    </li>
                </ul>
                <ul class="nav justify-content-end">
                <li class="nav-item">
                        <button onClick={()=>navigate('/Register')} class="nav-link text-white btn btn-outline-warning">Register</button>
                    </li>
                    <li class="nav-item">
                        <button onClick={()=>navigate('/Form')} class="nav-link text-white btn btn-outline-warning">Login</button>
                    </li>
                    <li class="nav-item">
                        <button onClick={()=>navigate('/Product')} class="nav-link text-white btn btn-outline-warning">Products</button>
                    </li>
                    <li class="nav-item">
                        <button onClick={()=>navigate('/axios')} class="nav-link text-white btn btn-outline-warning">Axios</button>
                    </li>
                    <li class="nav-item">
                        <button onClick={()=>navigate('/Context')} class="nav-link text-white btn btn-outline-warning">Context</button>
                    </li>
                </ul>
            </navbar>
            {/* <Link > <button type='button' className=' btn btn-primary'> form</button></Link>
            <Link > <button type='button' className=' btn btn-primary'> Product</button></Link> */}
            {/* </div> */}
            {/* </div> */}
        </div>
    )
}

export default Header
