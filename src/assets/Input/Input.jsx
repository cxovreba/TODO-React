import React from 'react'

const Input = ({type, placeholder, width, height, rounded, border, onChanged, outline, onKeyDown, value}) => {
    return <input
        className='input'
        type={type}
        placeholder={placeholder}
        style={{ border: border, borderRadius: rounded, outline: outline, width: width, height: height }}
        onChange={onChanged}
        onKeyDown={onKeyDown}
        value={value}
    />
}

export default Input
