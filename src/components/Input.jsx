import React from 'react'

const Input = (title, placeholder) => {
    return (
        <div>
            <h2>{title}</h2>
            <input type="text" placeholder={placeholder} />
        </div>
    )
}

export default Input