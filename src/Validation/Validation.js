import React from 'react';


const validation = (props) => {

    let validText = 'Not Long Enough, Sorry';
    if (props.inputlength > 5) {
        validText = 'Long Enough Now, Thanks';
    }

    return (
        <div>
            <p>You now have {props.inputlength} letters</p>
            <p>{validText}</p>
        </div >
    )
}

export default validation;