import React from 'react';


const Suggestion = (props) => {
    return (
        <div>
            <ul>
                {props.data.filter(name => name.startsWith(props.searchValue)).map((filteredName, index) => (
                    <li key={index}>
                        {filteredName}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Suggestion;



