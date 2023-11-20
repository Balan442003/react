import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Otp() {
    // const loginuser=JSON.parse(localStorage.getItem('LoginData'))
    const [otp, setOtp] = useState('');
    console.log(otp);
    const navigate = useNavigate();
    function Verify() {
        
        // if(loginuser){
        try{
        if (otp !== '1111') {
            toast.error("Invalid OTP")
        }
        else {
            toast.success("Successfully login")
            setTimeout(() => {
                navigate("/Dashboard")
            }, 3000)
        }
    }catch(error){
        alert("Something went wrong")
    }
// }
    }

    
    return (
        
        <div className='container'>
            <div className='toast-container'>
                <ToastContainer limit={2} />
            </div>
            <div className='position-absolute top-50 start-50 translate-middle'>
                
                <center><label><b>Enter OTP:</b></label></center>
                <br />

                <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderSeparator={<span>  -  </span>}
                    renderInput={(props) => <input {...props} />}
                    inputStyle={{
                        border: "1px solid ",
                        borderRadius: "8px",
                        width: "54px",
                        height: "54px",
                        fontSize: "12px",
                        color: "#000",
                        fontWeight: "400",
                        caretColor: "blue"
                    }}
                    focusStyle={{
                        border: "1px solid #CFD3DB",
                        outline: "none"
                    }}

                />
                <br />
                <center><button className='btn btn-primary' onClick={() => Verify()}>Verify OTP</button></center>
            </div>
        </div>
    );
}