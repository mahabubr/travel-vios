import React, { useContext } from 'react';
import './Header.css'
import Logo from '../../../assets/logo/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Header = () => {

    const { user, LogOut } = useContext(AuthContext)


    const handleSignOut = () => {
        LogOut()
            .then(() => {
                toast.success('Sign Out Successful')
            })
            .catch(e => {
                toast.error(e.message)
            })
    }

    return (
        <div className='header-container'>
            <Link to='/' className='header-img'>
                <img src={Logo} alt="" />
            </Link>
            <div className='header-link'>
                <ul>
                    <li>
                        <Link to='/'>Destination</Link>
                    </li>
                    <li>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    {
                        user?.uid
                            ?
                            <>
                                <li>
                                    <button onClick={handleSignOut} className='header-login-btn'>Sign Out</button>
                                </li>
                                <div className='user-info-header'>
                                    <p>{user?.displayName}</p>
                                    <img src={user?.photoURL} alt="" />
                                </div>
                            </>
                            :
                            <li>
                                <Link to='/login'>
                                    <button className='header-login-btn'>LOGIN</button>
                                </Link>
                            </li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;