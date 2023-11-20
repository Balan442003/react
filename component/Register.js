import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const validationSchema = Yup.object().shape({
    // title: Yup.string()
    //     .required('Title is required'),
    firstName: Yup.string()
        .required('First Name is required').trim(),
    lastName: Yup.string()
        .required('Last name is required').trim(),
    // dob: Yup.string()
    //     .required('Date of Birth is required')
    //     .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid').trim(),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(15, 'Password must be in 15 characters')
        .required('Password is required').trim(),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required').trim(),
    acceptTerms: Yup.bool()
        .oneOf([true], 'Accept Ts & Cs is required'),

});

const Register = () => {
    const navigate = useNavigate();

    // functions to build form returned by useForm() hook
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
        mode: 'onBlur',

    });

    function onSubmit(data) {
        // display form data on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        const StoredData = JSON.parse(localStorage.getItem('UserDetails')) || [];
        const IsEmailAlreadyExists = StoredData.some((user)=>user.email === data.email)
        if(IsEmailAlreadyExists){
            toast.error("Email Already Exists")
        }else{
        toast.success("Successfully Registered!");
        
        const id = StoredData.length + 1;
        const datas = { ...data, id }
        StoredData.push(datas);
        localStorage.setItem('UserDetails', JSON.stringify(StoredData));
        reset()
        // resetField("firstName");
        // resetField("lastName");
        // resetField("email");
        // resetField("password");
        // resetField("confirmPassword");
        
        setTimeout(()=>{
            navigate("/Form")
        },3000)
    }

    }
    return (
        <div className="card m-3">

            <h5 className="card-header">React - Form Validation Example with React Hook Form</h5>
            <div className="card-body">
            <div className='toast-container'>
            <ToastContainer limit={2}/>
            </div>
                
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="form-row">
                        {/* <div className="form-group col">
                            <label>Title</label>
                            <select name="title" {...register('title')} className={`form-control ${errors.title ? 'is-invalid' : ''}`}>
                                <option value=""></option>
                                <option value="Mrs">Mrs</option>
                                <option value="Miss">Miss</option>
                                <option value="Ms">Ms</option>
                            </select>
                            <div className="invalid-feedback">{errors.title?.message}</div>
                        </div> */}
                        <div className="form-group col">
                            <label>First Name</label>
                            <input name="firstName" type="text" {...register('firstName')} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} autoFocus />
                            <div className="invalid-feedback">{errors.firstName?.message}</div>
                        </div>
                        <div className="form-group col">
                            <label>Last Name</label>
                            <input name="lastName" type="text" {...register('lastName')} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.lastName?.message}</div>
                        </div>
                    </div>
                    <div className="form-row">
                        {/* <div className="form-group col">
                            <label>Date of Birth</label>
                            <input name="dob" type="date" {...register('dob')} className={`form-control ${errors.dob ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.dob?.message}</div>
                        </div> */}
                        <div className="form-group col">
                            <label>Email</label><input name="email" type="text"  {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.email?.message}</div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col">
                            <label>Password</label>
                            <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                        <div className="form-group col">
                            <label>Confirm Password</label>
                            <input name="confirmPassword" type="password" {...register('confirmPassword')} className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
                        </div>
                    </div>
                    <div className="form-group form-check">
                        <input name="acceptTerms" type="checkbox" {...register('acceptTerms')} id="acceptTerms" className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`} />
                        <label for="acceptTerms" className="form-check-label">Accept Terms & Conditions</label>
                        <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary mr-1 m-2">Register</button>

                        <button className="btn btn-secondary" onClick={()=>reset()}  type="reset">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
