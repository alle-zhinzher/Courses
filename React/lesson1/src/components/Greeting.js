import React from 'react';


class Greeting extends React.Component {

    getTime() {
        const date = new Date();
        return date.getHours();
    };

    render() {
        return (
            <div>
                <h1>Time: {this.getTime()}</h1>
            </div>
        )
    }
}

export default Greeting