import React from 'react'

function Demo(props) {
    return (
        <div>
            <h1>My Friend name is {props.friendName}</h1>
            <h3>His Favovite film is {props.filmName}</h3>
            <h3>His age is {props.ageName}</h3>
        </div>
    )
}

export default Demo;