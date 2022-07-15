import React from "react";
import MyItem from "./MyItem";
import cl from './items.module.css'

const MyItemList = ({title, value, remove}) => {
    if (value.length == 0) {
        return (
            <h1>Задач не обнаружено, вы все сделали!</h1>
        )
    } else {
        return (
            <div className={cl.list}>
                <h1>{title}</h1>
                {value.map((element, index) => 
                    <MyItem key={index} title={element.title} post={element} removeItem={remove}/>
                )}
            </div>
        )
    }
}

export default MyItemList;