import React from 'react'

const Skills = () => {
    const skills = ['html', 'css', 'java', 'javascript', 'node express', 'sql', 'react']

    return (
        <section>
            <div className="t-wrap">
                <h2>Skills</h2>
                <ul className="skills">
                    {skills.map((skill, i) => (
                        <li key={i}> {skill} </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Skills