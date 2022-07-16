import React from "react";
import MyInput from "../UI/input/MyInput";
import ButtonAdd from "../UI/buttons/ButtonAdd";
import { useState } from "react";
import cl from './MyForm.module.css'

const MyForm = ({addPost, value, setValue}) => {

    return (
        <form className={cl.myForm}>
            <MyInput
                placeholder={'Введите задачу'}
                value={value.title}
                onChange={(elem) => setValue({title:elem.target.value, check:false})}
                type={'text'} 
            />
            <ButtonAdd
                type='button'
                onClick={() => addPost(value)} 
            />
        </form>
    )
}

export default MyForm;