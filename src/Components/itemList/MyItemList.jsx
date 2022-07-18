import React from "react";
import MyItem from "./MyItem";
import cl from './items.module.css'

const MyItemList = ({title, value, remove, checkValue, setCheckValue}) => {
    if (value.length == 0) {
        return (
            <h1>Задач не обнаружено, вы все сделали!</h1>
        )
    } else {
        return (
            <div className={cl.list}>
                {value.map((element, index) => 
                    <MyItem 
                        id={element.id}
                        key={index} 
                        title={element.title} 
                        post={element} 
                        removeItem={remove} 
                        checkValue={checkValue}
                        setCheckValue={setCheckValue}
                    />
                )}
            </div>
        )
    }
}

export default MyItemList;