import React from 'react'

const BootstrapSelect = ({ label, onChange, data }) => {
    return (
        <select onChange={onChange} className="form-select" aria-label="Default select example">
            <option defaultValue=''>{label}</option>
            {data?.map((el, index) => {
                return (
                    <option key={index} value={el}>{el}</option>
                )
            })}
        </select>
    )
}

export default BootstrapSelect
