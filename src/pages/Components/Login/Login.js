import React, { useContext } from 'react';
import './Login.css'
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {

    const { LogIn } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleSignIn = (event) => {
        event.preventDefault()

        const form = event.target

        const email = form.email.value
        const password = form.password.value

        LogIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                toast.success('Log In Successful')
                navigate(from, { replace: true })
            })
            .catch(e => {
                toast.error(e.message)
            })
    }

    return (
        <div className='login-container'>
            <form onSubmit={handleSignIn} className='login-form'>
                <h2>Login</h2>
                <div>
                    <input className='input-field' type="email" name="email" placeholder='Username or Email' id="" />
                </div>
                <div>
                    <input className='input-field' type="password" name="password" placeholder='Password' id="" />
                </div>
                <div className='forgot-field'>
                    <div className='remember-me'>
                        <input type="checkbox" name="checkbox" id="remember" />
                        <label htmlFor="remember">Remember Me</label>
                    </div>
                    <div>
                        <p>Forgot Password</p>
                    </div>
                </div>
                <input className='form-submit-btn' type="submit" value="Login" />
                <p className='acc-paragraph'>Don’t have an account? <Link to='/register'>Create an account</Link></p>
            </form>
            <div>
                <div className='sign-in-link'>
                    <FaFacebook className='sign-in-icon' />
                    <p>Continue with Facebook</p>
                </div>
                <div className='sign-in-link'>
                    <FaGoogle className='sign-in-icon' />
                    <p>Continue with Google</p>
                </div>
            </div>
        </div>
    );
};

export default Login;