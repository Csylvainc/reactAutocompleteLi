import React from 'react';
import './Preview.css'

const Total = (props) => {

   
    console.log('total = ' + props.total);
    let text = `Current input is ${props.total}`
    return (
        <div>
            <p className="HasSelection">{text}</p>
        </div>
    )
}

export default Total;