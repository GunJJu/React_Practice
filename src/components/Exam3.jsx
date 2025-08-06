import React, { useState } from 'react'

const Exam3 = () => {
    const [text, setText] = useState('Hello')

    const onClickButton = () => {
        text === 'Hello' ? setText('Good Bye') : setText('Hello')
    }

    return (
        <div>
            <h2>{text}</h2>
            <button onClick={onClickButton}>버튼을 눌러봐!</button>
        </div>
    )
}

export default Exam3