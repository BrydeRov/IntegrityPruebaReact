import React from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
// Components
import Input from '../Components/Input'
import Password from '../Components/Password'
// Material UI
import { Alert, Button, IconButton } from '@mui/material'
import { GitHub, LoginOutlined } from '@mui/icons-material';
// React Form Hook
import { useForm } from "react-hook-form";


const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [alertError, setAlertError] = React.useState();


    const onSubmit = async (data) => {
        try {
            const response = await axios.post('https://dummyjson.com/auth/login', {
                username: data.username,
                password: data.password
            }).then((response) => {
                localStorage.setItem('userData', JSON.stringify(response.data));
                navigate("/Productos/Inicio")
            })
        } catch (error) {
            setAlertError(<Alert severity="error">{error?.response?.data?.message}</Alert>);
        }
    }

    return (
        <div className='d-flex flex-row shadow-lg mx-auto mt-5 rounded border w-75'>
            <div className='w-50 border'>
                <img className='img-fluid' src='/Images/LoginCard.png' />
            </div>
            <div className='w-50 border text-center'>
                <h1 className='fw-semibold my-3'>Bienvenido</h1>
                <div className='text-center items-center'>
                    <small className='fw-semibold'>Integrity React Test - Javier Camacho</small>
                    <Link to="https://github.com/BrydeRov">
                        <IconButton aria-label="delete" size="small">
                            <GitHub fontSize="small" />
                        </IconButton>
                    </Link>
                </div>
                <div className='d-flex flex-row justify-content-center'>
                    <img className='me-2' src='/materialUI.svg' width='20' />
                    <small className='fw-semibold'>Material UI</small>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column h-50 justify-content-center'>
                    <Input
                        className='text-white'
                        label='Usuario'
                        defaultValue="hbingley1"
                        register={register}
                        name='username'
                    />
                    <Password
                        className='mt-5'
                        register={register}
                        name='password'
                        defaultValue='CQutx25i8r'
                    />

                    <Button type='submit' className='mx-4 mt-5' variant="contained" startIcon={<LoginOutlined />}>
                        Iniciar Sesión
                    </Button>

                    <div className='f-block mx-5 mt-3'>
                        {alertError}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
