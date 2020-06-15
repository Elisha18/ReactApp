import React from 'react';
const Button = (props) => {
    return ( 
        <button className="button" onClick = {props.onChange} >{props.label}</button>
     );
}
 
export default Button;