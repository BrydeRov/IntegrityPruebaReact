import React from 'react'

const BootstrapInput = ({ id, span, placeholder, ...inputProps }) => {
    return (
        <div className="input-group mb-3">
            <span className="input-group-text" id={id}>{span}</span>
            <input
                type="text"
                className="form-control"
                placeholder={placeholder}
                aria-label={placeholder}
                aria-describedby={id}
                {...inputProps}
            />
        </div>
    )
}

export default BootstrapInput
