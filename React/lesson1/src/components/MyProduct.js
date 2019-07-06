import React from 'react';

function MyProduct(props) {
    return (
        <div>
            <h1>Producy name: {props.name}</h1>
            <h1>Price: {props.price}$</h1>

        </div>
    )
}

export default MyProduct