import React from 'react'

const Button = ({onClick, children, width, height, backgroundColor, rounded, textColor, border}) => {
    return <button
        className='add-btn'
        onClick={onClick}
        style={{ width: width, height: height, backgroundColor: backgroundColor, borderRadius: rounded, color: textColor, border: border, cursor: 'pointer' }}
    >
        {children}
    </button>
}

export default Button
