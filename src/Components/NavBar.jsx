import { Logout } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [userData, setUserData] = useState();
    const navigate = useNavigate();

    const getUserData = () => {
        let data = localStorage.getItem('userData');
        data = JSON.parse(data);
        setUserData(data);
    }

    const logOut = () => {
        localStorage.removeItem('userData')
        navigate('/')
    }

    useEffect(() => {
        getUserData();
    }, [])
    return (
        <nav className="navbar bg-body-tertiary border">
            <div className="container">
                <div className='flex flex-row'>
                    <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24" />
                    <span className='ms-2'>Hecho Con Bootstrap</span>
                </div>
                <div className='flex flex-row'>
                    <img src={userData?.image} className='rounded-circle border' width='40' />
                    <span className='fw-base ms-1 mt-2'>{`${userData?.firstName} ${userData?.lastName}`}</span>
                    <IconButton onClick={logOut} className='ms-3 text-danger' size='small'>
                        <Logout fontSize='small' />
                    </IconButton>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
