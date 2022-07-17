import React from "react";
import cl from './MyButtons.module.css'
const ButtonDelete = (props) => {
    return (
        <button {...props} className={cl.button__delete}>Delte</button>
    )
}

export default ButtonDelete;