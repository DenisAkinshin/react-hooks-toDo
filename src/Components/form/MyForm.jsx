import React from "react";
import MyInput from "../UI/input/MyInput";
import ButtonAdd from "../UI/buttons/ButtonAdd";
import { useState } from "react";

const MyForm = ({addPost}) => {
    const [post, setPost] = useState({title:'', check:'false'})
    console.log(post)

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={(elem) => setPost({title:elem.target.value, check:'false'})}
                type={'text'} 
            />
            <ButtonAdd
                type='button'
                onClick={() => addPost(post)} 
            />
        </form>
    )
}

export default MyForm;