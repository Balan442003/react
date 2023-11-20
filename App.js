
import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Form from './component/Form';
import Header from './component/Header';
// import Home from './component/Home';
// import Footer from './component/Footer';
import Json from './component/Json';
import Home from './component/Home';
import Foot from './component/Foot';
import Id from './component/Id';
import Register from './component/Register';
import Axios from './component/Axios';
import Dashboard from './component/Dashboard';
import Usecontext from './component/Usecontext';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UserAction } from "./redux/actions/UserAction";
import { Navigate } from 'react-router-dom';
import Addlist from './component/Addlist';
import Editlist from './component/Editlist';
import Error from './component/Error';
import Otp from './component/Otp';
// import DataTable from 'react-data-table-component';
import Datatable from './component/Datatablecomponent'
import Showlist from './component/Showlist';

function App() {
  // console.log("hello");
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  useEffect(() => {
    localStorage.setItem("token", "abc12345sdjsdfsdf")
  }, [])
  useEffect(() => {
    dispatch(UserAction.HomeTime())
    dispatch(
      UserAction.GetCmsData(
        {
          name: "Balan",
        },
        (resp) => {
          console.log(resp);
        }
      )
    );
  }, []);
  const PrivateRoute = ({component})=>{
    const loguser = JSON.parse(localStorage.getItem('LoginData'))
    if(loguser){
      return component
    }else{
      return <Navigate to='/Form' />
    }
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Form' element={<Form />} />
        <Route path='/Product' element={<Json />} />
        <Route path='/Product/:id' element={<Id />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/axios' element={<Axios />} />
        <Route path='/Dashboard' element={<PrivateRoute component={<Dashboard />} />} /> 
        <Route path='/Context' element={<Usecontext />} />
        <Route path='/addlist' element={<Addlist />} />
        <Route path='/editlist/:id' element={<Editlist />} />
        <Route path='/Otp' element={<Otp />} />
        <Route path='/*' element={<Error />}/>
        <Route path='/movies' element={<Datatable />} />
        <Route path="/showlist" element={<Showlist/>}/>
      </Routes>
      <Foot />

    </div>
  );
}

export default App;
