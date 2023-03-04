import React from "react";
import './Home.css';
import { useNavigate } from "react-router-dom";

const Home = () =>{
    const navigate = useNavigate();
    return(
        <>
        <div className="btn-log-sign">
            <button className="btn-login" onClick={()=> navigate('/login')}>Log In</button> <button className="btn-sign">Sign Up</button>        
        </div>
        <div className="header-home">
                       
            <h1 className="logo-creat">Creat</h1> <h1 className="logo-or">Or</h1>
            <input type="search" className="search-home" placeholder="Search"/>
            
            <div className="categories">
                <button>Home</button>
                <button>Suppliers</button>
                <button>Sponsors</button>
                <button>About</button>
                <button>Contact Us</button>
            </div>

        </div>
        
        </>

    )
}

export default Home;