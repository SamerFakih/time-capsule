import React from 'react'
import './styles.css';

const Button = ({  text, type, className, onClick }) => {
    return (
        <button type={type}
                className={ "button" + (className ? ` ${className}` : '') }
                onClick={onClick}
                >{text}
        </button>
    )
}

export default Button