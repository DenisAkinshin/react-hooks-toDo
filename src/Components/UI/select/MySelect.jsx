import React from "react";
import cl from './MySelect.module.css'

const MySelect = ({sort, sorted, option, defaultValue}) => {
    return (
        <select
            className={cl.mySelect}
            value={sort}
            onChange={(elem) => sorted(elem.target.value)}
        >
            <option disabled>{defaultValue}</option>
            {option.map((item, index) =>
                <option key={index+1} value={item.value}>{item.title}</option>
            )}
        </select>
    )
}


export default MySelect;