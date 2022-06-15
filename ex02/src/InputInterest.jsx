import React from 'react';

const InputInterest = (props) => {
    return (
        <div>
            <label htmlFor="interest">Interest  </label>
            <input type="text" name="interest" id="interest" onChange={props.handleChangeInterest}/>
        </div>
    )
}

export default InputInterest;