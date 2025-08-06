import React, { useState } from 'react'

const Exam2 = () => {
    const [input, setInput] = useState('')

    const onChangeInput = (e) => {
        setInput(e.target.value)
    }
    const cleanInput = () => {
        setInput('')
    }

    console.log(input)

    return (
        <div>
            <h2>input을 해보자!</h2>
            <input value={input} onChange={onChangeInput} type="text" />
            <button onClick={cleanInput}>글씨 지우기</button>
        </div>
    )
}

export default Exam2