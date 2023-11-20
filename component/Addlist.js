import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    // title: Yup.string()
    //     .required('Title is required'),
    Productname: Yup.string()
        .required('Product Name is required').trim(),
    Productmrp: Yup.string()
        .required('Productmrp is required').trim(),
})
const Addlist = () => {
    const navigate = useNavigate();
    // const [Productname, setProductname] = useState();
    // const [Productmrp, setProductmrp] = useState();
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
        mode: 'onBlur',

    });
    // console.log(lists);

    const onSubmit = (data) => {
        
        const user= JSON.parse(localStorage.getItem('LoginData'));
        const loguser = user.email
        const lists = JSON.parse(localStorage.getItem(loguser)) || [];
        const id = lists.length ? lists[lists.length -1].id +1 : 1;
        const datas = { ...data, id }
        lists.push(datas)
        // const listsobj = {
        //     id :id,
        //     Productname: Productname,
        //     Productmrp: Productmrp
        // }
        // lists.push(listsobj);
        // toast.success("Successfully Registered!");
        localStorage.setItem(loguser,JSON.stringify(lists));
        reset()
        navigate('/Showlist')
       
    }
    return (
        <div className='container mt-5 p-5'><br /><br />
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
                        <div className="form-group col">
                            <label>Product name</label>
                            <input name="Productname" type="text" {...register('Productname')} className={`form-control ${errors.Productname ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.Productname?.message}</div>
                        </div>
                        <div className="form-group col">
                            <label>Product MRP</label>
                            <input name="Productmrp" type="text" {...register('Productmrp')} className={`form-control ${errors.Productmrp ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.Productmrp?.message}</div>
                        </div>
                    </div>
                    <br />
                    <button className='btn btn-primary'>Submit</button>
                {/* <button onClick={()=>Heart()}>Hey</button> */}
            </form>
        </div>
    )
}

export default Addlist


