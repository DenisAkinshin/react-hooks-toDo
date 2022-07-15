import React from "react";
import MyInput from "../UI/input/MyInput";
import ButtonDelete from "../UI/buttons/ButtonDelete";
import cl from './items.module.css'

const MyItem = ({title, post, removeItem}) => {
    return (
        <div className={cl.item}>
            <MyInput
                type={'checkbox'}
            />
            <h2>{title}</h2>
            <ButtonDelete onClick = {() => removeItem(post)}/>
        </div>
    )
}

export default MyItem;