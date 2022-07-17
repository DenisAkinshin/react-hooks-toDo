import React, { Children } from "react";
import cl from './MyButtons.module.css'

const ButtonAdd = (props) => {
    return (
        <button {...props} className={cl.button__add}></button>
    )
}

export default ButtonAdd;