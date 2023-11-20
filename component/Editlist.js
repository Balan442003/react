// import React from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import { useState } from 'react';
// const Editlist = () => {
//     const params = useParams();
//     const navigate = useNavigate();
//     // console.log(id);
//     const user = JSON.parse(localStorage.getItem('LoginData'));
//     const loguser = user.email
//     const singleProducts = JSON.parse(localStorage.getItem(loguser))
//     console.log(singleProducts);
//     const productToEdit=singleProducts.find((product)=>product.id == params.id)
//     console.log(productToEdit);
//     const [formData, setFormData] = useState({
//         // id:productToEdit.id,
//         Productname: productToEdit.Productname,
//         Productmrp: productToEdit.Productmrp
//     })

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;

//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//         console.log(formData);
//     };
//     const handleSubmit = (e) => {

//         e.preventDefault();
//         const productIndex = singleProducts.findIndex((product)=>product.id == params.id)
//         const updatedUserProducts = [...singleProducts];
//         updatedUserProducts[productIndex] = {
//             ...productToEdit,
//             ...formData,
//         };
//         console.log(updatedUserProducts);
//         localStorage.setItem(loguser, JSON.stringify(updatedUserProducts));
//         navigate('/Showlist')
//     }
//     return (
//         <div>
//             <div className='container mt-5'><br /><br />
//                 <form onSubmit={handleSubmit}>
//                     <label>Product Name</label>
//                     <input type='text' placeholder='productname' value={formData.Productname} name="Productname" onChange={handleInputChange} autoFocus></input><br /><br />
//                     <label>Product MRP</label>
//                     <input type='text' placeholder='productmrp' value={formData.Productmrp} name="Productmrp" onChange={handleInputChange}></input><br /><br />
//                     <button type="submit" className="btn btn-primary mr-1 m-2">Submit list</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Editlist




import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'; // Import Yup for schema validation

const Editlist = () => {
    const params = useParams();
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('LoginData'));
    const loguser = user.email;
    const singleProducts = JSON.parse(localStorage.getItem(loguser));

    const productToEdit = singleProducts.find((product) => product.id == params.id);
    const validationSchema = yup.object().shape({
        Productname: yup.string().required('Product Name is required').trim(),
        Productmrp: yup.string().required('Product MRP is required').trim(),
        
    });


    const { register, handleSubmit,reset, formState:{errors} } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            Productname: productToEdit.Productname,
            Productmrp: productToEdit.Productmrp,
        },
        mode: 'onBlur',
    });

    

    const onSubmit = (data) => {
        
        const productIndex = singleProducts.findIndex((product) => product.id == params.id);
        const updatedUserProducts = [...singleProducts];
        updatedUserProducts[productIndex] = {
            ...productToEdit,
            ...data,
        };
        localStorage.setItem(loguser, JSON.stringify(updatedUserProducts));
        reset()
        navigate('/Showlist');
    };

    return (
        <div>
            <div className='container mt-5'><br /><br />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Product Name</label>
                    <input
                        type='text'
                        placeholder='productname'
                        name='Productname'
                        {...register('Productname')}
                        autoFocus
                        className={`form-control ${errors.Productname ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.Productname && <p>{errors.Productname.message}</p>}</div>
                    <br />
                    <label>Product MRP</label>
                    <input
                        type='text'
                        placeholder='productmrp'
                        name='Productmrp'
                        {...register('Productmrp')}
                        className={`form-control ${errors.Productmrp ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.Productmrp && <p>{errors.Productmrp.message}</p>}</div>
                    <br />
                    <button type='submit' className='btn btn-primary mr-1 m-2'>
                        Submit list
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Editlist;