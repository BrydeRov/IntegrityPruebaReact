import React from 'react'
import { TextField } from '@mui/material'

const Input = ({ label, register, defaultValue, name, ...inputProps }) => {
    return (
        <TextField
            type='text'
            className='mx-4 mt-5'
            id="outlined-basic"
            label={label}
            defaultValue={defaultValue}
            variant="outlined"
            {...register(name)}
        />
    )
}

export default Input
