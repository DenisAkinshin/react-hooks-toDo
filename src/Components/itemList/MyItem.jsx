import React from "react";
import ButtonDelete from "../UI/buttons/ButtonDelete";
import cl from './items.module.css'
import MyCheckbox from "../UI/input/MyCheckbox";

const MyItem = ({title, post, removeItem, checkValue, setCheckValue}) => {

    

    function upDateCkeck(title, value) {
        let updateList = checkValue.map((item) => {
            if (item.title == title) {
                return {...item, check:value}
            } else {
                return item
            }
        })
        setCheckValue(updateList)
    }

    return (
        <div className={cl.item}>
            <MyCheckbox
                checked={post.check}
                onChange={(elem) => upDateCkeck(post.title, elem.target.checked)}
                type={'checkbox'}
            />
            <h2>{title}</h2>
            <ButtonDelete onClick = {() => removeItem(post)}/>
        </div>
    )
}

export default MyItem;