import { TextField } from '@mui/material'
import React from 'react'

const Password = ({ label, register, defaultValue, name }) => {
    return (
        <TextField
            className='mx-4 mt-5'
            id="outlined-password-input"
            label={label ?? 'Contraseña'}
            type="password"
            defaultValue={defaultValue}
            autoComplete="current-password"
            {...register(name)}
        />
    )
}

export default Password
