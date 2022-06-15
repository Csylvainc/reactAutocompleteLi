import React from 'react';
import './Preview.css'

const Preview = (props) => {
    let text = "You havent't made your selection yet."
    let css
    if(props.selectedValue){
            text = `You have currently selected the ${props.selectedValue} level`
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