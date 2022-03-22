import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css';



const Login = () => {

    const { signInUsingGoogle } =useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/ok';

    const handleGoogleLogin = () =>{
            signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
   

    return (
        <div>
            <h2 className="blue">Please Login</h2>

            <div className="background">

            <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email"/>
                    <br/>
                    <input type="password" name="" id=""/>
                    <br/>
                    <input className="mt-3 bg-primary rounded " type="submit" value="Submit" />
                </form>
                <p>Dont have an account? <Link to="/register">Create Account</Link></p>
                <div>********OR*********</div>
            </div>

            
            <button onClick={handleGoogleLogin} className="btn btn-primary">Google Sign In</button>
        </div>
    );
};

export default Login;