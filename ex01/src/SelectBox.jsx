import React from 'react';

const SelectBox = (props) => {
    return (
        <div>
            <input type="text" name="mytext" id="mytext" onChange={props.handleChange}/>
        </div>
    )
}

export default SelectBox;