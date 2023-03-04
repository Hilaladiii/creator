import React from "react";
import CardSignup from "../../card/CardSigup";
import { useState, useEffect } from "react";
import './Style.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () =>{   

    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');
    const [username, setUsername] = useState('');    
    const [password, setPassword] = useState('');
    const [confpassword, setConfpassword] = useState('');

    const navigate = useNavigate();

    

    
    return(        
        <>
        <div className="top-signup">
        <h1 className="creator-top-signup">CreatOr</h1>
        <p className="title-top-signup">SIGNUP</p>        
        </div>
        <div className="card-signup">        
        <CardSignup>
            <h1 className="title-signup">Sign Up</h1>
            <p className="subtitle-signup">Create your account</p>
            <form onSubmit={handleLogin}>                 
                <div className="input-container-signup">                
                    <label for="email" className="fieldsub-signup">Email Address</label>                
                    <div className="in-signup">
                    <input type={"email"} placeholder="Type your email address"id="email" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                    </div>

                    <label for="number" className="fieldsub-signup">Phone Number</label>                 
                    <div className="in-signup">
                    <input id="number" placeholder="Type your phone number" value={number} onChange={(e)=> setNumber(e.target.value)}>
                    </input>
                    </div>

                    <label for="address" className="fieldsub-signup">Address</label> 
                    <div className="in-signup">                    
                    <input id="address" placeholder="Type your address" value={address} onChange={(e)=> setAddress(e.target.value)}></input>
                    </div>
                    
                    <label for="username" className="fieldsub-signup">Username</label> 
                    <div className="in-signup">                    
                    <input id="username" placeholder="Type your username" value={username} onChange={(e)=> setUsername(e.target.value)}></input>      
                    </div>

                    <label for="password" className="fieldsub-signup">Password</label>                  
                    <div className="in-signup">                    
                    <input type={"password"} id="password" placeholder="Type your password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>                                                         
                    </div>

                    <label for="confirm-password" className="fieldsub-signup">Confirm Password</label>                  
                    <div className="in-signup">                    
                    <input type={"password"} id="password" placeholder="Type your password" value={confpassword} onChange={(e)=> setConfpassword(e.target.value)}></input>                     
                    </div>
                </div>    
                <button type="submit" className="sign-button" onClick={() => navigate('/verification')}>Sign Up</button>                                    
            </form>
            <p className="dont-account-signup">Already have an account?
            <a href="/" className="dont-account-link-signup">
                Log in
            </a>
            </p>
            

        </CardSignup>
        </div>

        </>
    )

}

export default Signup;