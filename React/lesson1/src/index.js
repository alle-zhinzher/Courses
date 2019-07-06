import React from 'react';
import ReactDOM from 'react-dom';


function MyName() {
    return <h1>Oleksandr</h1>
};
function MyText() {
    return <p>Im student who lern React</p>
}
function MySport() {
    var ulStyle = {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: '20px',
    }
    return (
        <ul style={ulStyle}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    ) 
 }

function MyInfo() {
    return (
        <div>
            <MyName />
            <MyText />
            <MySport />
        </div>
    )
}

ReactDOM.render(<MyInfo />, document.getElementById('root'));


