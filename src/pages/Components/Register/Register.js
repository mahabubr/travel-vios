import React, { useContext, useState } from 'react';
import './Register.css'
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {

    const { registerUser, updateNameAndImage, userValidation } = useContext(AuthContext)

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')


    const submitForm = (event) => {
        event.preventDefault()

        console.log(name, image, email, password)

        registerUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                updateNameAndImage(name, image)
                    .then(() => {
                        toast.success('Successfully Added Name And Image')
                    })
                    .catch(e => {
                        toast.error(e.message)
                    })
                event.target.reset()
                toast.success('Register Successfully!')
                userValidation()
                    .then(() => {
                        toast.success('Please Confirm Your Validation')
                    })
                    .catch(e => {
                        toast.error(e.message)
                    })
            })
            .catch(e => {
                toast.error(e.message)
            })

    }


    const registerName = (event) => {
        const inputName = event.target.value
        setName(inputName)
    }

    const registerImage = (event) => {
        const inputImage = event.target.value
        setImage(inputImage)
    }

    const registerEmail = (event) => {
        setEmailError('')
        const inputEmail = event.target.value
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(inputEmail)) {
            setEmailError("please input valid email");
            return
        }

        return setEmail(inputEmail)

    }

    const registerPassword = (event) => {
        setPasswordError('')
        const inputPassword = event.target.value

        if (!/(?=.*[A-Z])/.test(inputPassword)) {
            setPasswordError('password must be one uppercase')
            return
        }
        else if (!/(?=.*[0-9])/.test(inputPassword)) {
            setPasswordError('password must be 1 numeric character')
            return
        }
        else if (!/(?=.*[!@#$%^&*])/.test(inputPassword)) {
            setPasswordError('password must be one special character')
            return
        }
        else if (inputPassword.length < 6) {
            setPasswordError('password must be 6 character')
        }

        return setPassword(inputPassword);
    }

    return (
        <div className='login-container'>
            <form onSubmit={submitForm} className='login-form'>
                <h2>Login</h2>
                <div>
                    <input onChange={registerName} className='input-field' type="text" name="name" placeholder='Full Name' id="" />
                </div>
                <div>
                    <input onBlur={registerImage} className='input-field' type="text" name="image" placeholder='Image URL' id="" />
                </div>
                <div>
                    <input onChange={registerEmail} className='input-field' type="email" name="email" placeholder='Email' id="" />
                    <p className='error'>{emailError}</p>
                </div>
                <div>
                    <input onChange={registerPassword} className='input-field' type="password" name="password" placeholder='Password' id="" />
                    <p className='error'>{passwordError}</p>
                </div>
                <input className='form-submit-btn' type="submit" value="Register" />
                <p className='acc-paragraph'>Already have an account? <Link to='/login'>Login</Link></p>
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

export default Register;