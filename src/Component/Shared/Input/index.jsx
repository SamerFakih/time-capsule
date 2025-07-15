import React from 'react'
import './styles.css';

const Input = ({ label, type, placeholder, required }) => {
    return (
        <>
            <label className='input-label'>{label}</label>
            <input type={type}
                    placeholder={placeholder}
                    required={required}
                    className='input-input'
            />
        </>
    )
}

export default Input