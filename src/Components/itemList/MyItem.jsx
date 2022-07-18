import React from "react";
import ButtonDelete from "../UI/buttons/ButtonDelete";
import cl from './items.module.css'
import MyCheckbox from "../UI/input/MyCheckbox";

const MyItem = ({title, id, post, removeItem, checkValue, setCheckValue}) => {

    

    function upDateCkeck(id, value) {
        let updateList = checkValue.map((item) => {
            if (item.id == id) {
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
                className={cl.checkbox}
                checked={post.check}
                onChange={(elem) => upDateCkeck(id, elem.target.checked)}
                type={'checkbox'}
            />
            <h2 className={cl.text}>{title}</h2>
            <ButtonDelete onClick = {() => removeItem(post)} className={cl.deleteBtn}/>
        </div>
    )
}

export default MyItem;