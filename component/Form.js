// import React, { useState } from 'react'
// // import { createContext } from 'react';
// const Form = () => {
//   // const LoginContext = createContext();

//   const [email, setMail] = useState("");
//   const [password, setPassword] = useState("");
//   const [Login,setLogin] = useState([]);
//   // const Mail = (e) => {
//   //   setname(e.target.value);
//   //   setmail(e.target.value);
//   //   setpassword(e.target.value)

//   // }
//   const LoginForm = () => {
//     // setname(e.target.value);
//     // setmail(e.target.value);
//     // setpassword(e.target.value);
//     const  Loginobj = {
//       email : email,
//       password : password
//     }
//     const StoredData = JSON.parse(localStorage.getItem('UserDetails')) || [];
//     let LoginData = StoredData.length && JSON.parse(localStorage.getItem('UserDetails')).find(obj => obj.email === email && obj.password === password);

//     // const LoginData = JSON.parse(localStorage.getItem('LoginDetails')) || [];
//     // LoginData.push(Loginobj);
//     // localStorage.setItem('LoginDetails', JSON.stringify(LoginData));
//     // setLogin(LoginData);
//     // console.log(Login)
//     setMail('');
//     setPassword('');
//     // (localStorage.setItem('Loginuser', JSON.stringify([...JSON.parse(localStorage.getItem('Loginuser')) || [], {
//     //   name: name,
//     //   email: mail,
//     //   password: password,
//     // }])))
//     // const getData = JSON.stringify(localStorage.getItem('Loginuser'))
//     // console.log(getData)
//   }
//   // useEffect(() => {
//   //   localStorage.setItem("Login",JSON.stringify())
//   // },[]);

//   return (
//     // <div className='position-absolute top-50 start-50 translate-middle'>
//     // <div className="container-fluid">
//     //   <h1>Login Form</h1>
//     // </div>
//     <div class="row justify-content-center mt-5">
//       <div class="col-6 mt-5">
//         <div class="card" style={{ width: " 18rem;" }}>
//           <div class="card-body">
//             <form className='border border-warning p-5 rounded bg-black' value="form">
//               {/* <label className='text-warning'>UserName: </label><br /><br /><input type="text" placeholder='Enter Your UserName'
//                 className='border border-warning rounded' onChange={(e) => setname(e.target.value)} autoFocus></input><br /><br /> */}
//               <label className='text-warning'>Email: </label><br /><br /><input type='email' placeholder='Enter Your Email ID'
//                 className='border border-warning rounded' onChange={(e) => setMail(e.target.value)}></input><br /><br />
//               <label className='text-warning'>Password: </label><br /><br />
//               <input type='password' placeholder='Enter Your Password' className='border border-warning rounded' onChange={(e) => setPassword(e.target.value)}></input><br /><br />
//               <button onClick={LoginForm} className='btn btn-warning'>Submit</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>



//   )
// }

// export default Form
import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';


const validationSchema = Yup.object().shape({

  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid').trim(),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(15, 'Password must be in 15 characters')
    .required('Password is required').trim(),


});

const Form = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, resetField, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',

  });

  function onSubmit(data) {
    // display form data on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
    const StoredData = JSON.parse(localStorage.getItem('UserDetails')) || [];
    let user = StoredData.length && JSON.parse(localStorage.getItem('UserDetails')).find(obj => obj.email === data.email && obj.password === data.password);

    
    // console.log(datas)
    if (!user) {
      alert("Invalid Login")

    } else {
      const firstName = user.firstName
      const loginid = user.id
      const datas = { ...data, firstName, loginid}
      localStorage.setItem("LoginData", JSON.stringify(datas))
      alert("You are login successfully")
      resetField("email");
      resetField("password");
      navigate("/Otp")
      
    }
  }
  return (
    <div className='position-absolute top-50 start-50 translate-middle'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
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
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary mr-1 m-2">Login</button>
        </div>
      </form>

    </div>
  );
}

export default Form