import React, { useState ,useEffect} from "react";
import CardLogin from "../../card/CardLogin";
import { useNavigate} from "react-router-dom";
import useHistory from "use-history";
import './LoginStyle.css';
import loginUser from "../../api/api";

const Login = () =>{             
    const navigate = useNavigate();    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    
    const handleLogin = async (event) => {
        event.preventDefault();
        const user = await loginUser(email, password);
        if (user) {
          history.push('/');
        }
      }


    
    return(        
        <body className="body-login">             
        <div className="top-login">
        <h1 className="creator-top-login">CreatOr</h1>
        <p className="title-top-login">LOGIN</p>        
        </div>
        <div className="card-login">
        <CardLogin>
            <h1 className="title-login">Welcome back!</h1>
            <p className="subtitle-login">Please login to acceess your account.</p>
            <form onSubmit={handleLogin}>                
                <div className="input-container-login">                
                <label for="email" className="fieldsub-login">Email Address / Username</label>
                
                <div className="in-user-login">                
                <input
                type={"email"}
                placeholder="Type your email / username"
                id="email"
                value={email} 
                onChange ={(e) => setEmail(e.target.value)}
                ></input>
                </div> 

                <div className="in-pass-login">
                <label for="password" className="fieldsub-login">Password</label>  
                <input
                type={"password"}
                id="password"
                placeholder="Type your password"
                value={password}
                onChange ={(e) => setPassword(e.target.value)}
                ></input> 
                </div> 

                <a href="" className="forgot-link-login">
                Forgot password?
                </a>      
                <button
                type="submit" 
                className="login-button-login"
                onClick={() => navigate('/')}
                >Log in</button>                
                </div>                                        
            </form>
            <p className="dont-account-login">New in CreatOr?
            <a href="/signup" className="dont-account-link-login" onClick={() => navigate('/signup')} >
                 Sign Up
            </a>
            </p>
        </CardLogin>
        
        </div>
        </body>
    )
}

export default Login;