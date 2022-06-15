import React from 'react';
import './Preview.css'

const Preview = (props) => {
    let text = "Current input is"
    let css
    if(props.selectedValue){
            text = `Current input is ${props.selectedValue}`
            css = 'Preview HasSelection'
    }else{
        css = 'Preview'
    }
    return (
        <div className={css}>
            <p className="HasSelection">{text}</p>
        </div>
    )
}

export default Preview;