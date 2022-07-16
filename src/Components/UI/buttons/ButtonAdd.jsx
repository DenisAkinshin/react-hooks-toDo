import React from "react";
import cl from './MyButtons.module.css'

const ButtonAdd = (props) => {
    return (
        <button {...props} className={cl.button__add}>Просто добавить</button>
    )
}

export default ButtonAdd;