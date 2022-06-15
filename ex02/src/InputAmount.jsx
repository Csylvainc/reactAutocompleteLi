import React from 'react';

const InputAmount = (props) => {
    return (
        <div>
            <label htmlFor="amount">Initial amount </label>
            <input type="text" name="amount" id="amount" onChange={props.handleChangeAmount}/>
        </div>
    )
}

export default InputAmount;