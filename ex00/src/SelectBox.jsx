import React from 'react';

const SelectBox = (props) => {
    return (
        <div>
            <h2>Pick your level:</h2>
            <select value={props.value} onChange={props.handleChange}>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
            </select>
        </div>
    )
}

export default SelectBox;