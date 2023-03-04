import React from "react";
import './Verification.css';
import { useNavigate } from "react-router-dom";

const Verification = () =>{
    const navigate = useNavigate();

    return(
        <>
        <div className="top-logo">
            <h1>CreatOr</h1>            
        </div>
        <div className="container">
            <h1 className="title">Registartion Access</h1>
            <div className="capts">
            <p className="capt">Congratulation, your registration was succsessful!</p>
            <p className="capt">Account information have been sent to your email address</p>            
            </div>
            <button type="submit" className="button-verif" onClick={() => navigate('/')}>Back to Login Page</button>
        </div>
        </>
    )
}

export default Verification;