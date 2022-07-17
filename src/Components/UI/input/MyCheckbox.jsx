import React from "react";
import check from '../../../images/Check.svg'
import cl from './MyInput.module.css'

const MyCheckbox = (props) => {
    return (
        <label className={cl.checkbox}>
            <input {...props}  className={cl.checkboxHidden}/>
            <div className={cl.customCheckbox}>
                <img src={check} alt="Галочка" className={cl.checkboxMark} />
            </div>
        </label>
    )
}

export default MyCheckbox;