import React from 'react';

function Conditional(props) {
   
        return (
            <div>
                <header>Heafer Here</header>
                <div>
                {props.loading ?<h1>Loading ...</h1>:<h1>Loaded !!!</h1>}
                </div>
                <footer>Footer here</footer>
            </div>
        )
    }

export default Conditional