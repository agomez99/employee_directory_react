import React from 'react';
import "./Button.css"

function Button({children}){
   
    return(
        <button className="btn-block">
            {children}
        </button>
    )
}
export default Button;