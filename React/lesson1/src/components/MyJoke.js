import React from 'react';

function MyJoke(props) {
    return (
        <div>
            <h1>{props.id?props.id:'What a shit'}</h1>
            <h1>{props.joke}</h1>

        </div>
    )
}

export default MyJoke