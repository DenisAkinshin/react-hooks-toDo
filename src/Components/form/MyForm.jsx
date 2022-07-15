import React from "react";
import MyInput from "../UI/input/MyInput";
import ButtonAdd from "../UI/buttons/ButtonAdd";
import { useState } from "react";

const MyForm = ({addPost, value, setValue}) => {

    return (
        <form>
            <MyInput
                value={value.title}
                onChange={(elem) => setValue({title:elem.target.value, check:'false'})}
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