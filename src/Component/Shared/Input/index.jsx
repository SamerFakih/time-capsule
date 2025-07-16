import React from 'react'
import './styles.css';

const Input = ({ label, type, name, placeholder, required, onChange ,accept,onSelect }) => {
    return (
        <>
            <label className='input-label'>{label}</label>
            <input type={type}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    className='input-input'
                    onChange={onChange}
                    accept={accept}
                    onSelect={onSelect}
            />
        </>
    )
}

export default Input