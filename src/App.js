import { useMemo, useState } from 'react';
import MyForm from './Components/form/MyForm';
import MyItemList from './Components/itemList/MyItemList';
import MySelect from './Components/UI/select/MySelect';
import './style/App.css';

function App() {

  const [state, setState] = useState([
    {id:1,title:'Wash my cars', check:false},
    {id:2,title:'Wash my dog', check:false},
    {id:3,title:'Wash my house', check:false},
    {id:4,title:'Wash my apples', check:false},
  ])


  const [post, setPost] = useState({id:0, title:'', check:false})
  const [sort, setSort]= useState('false')


  const sortedPost = useMemo(() => {
    if (sort === 'false') {
      return [...state].sort((a, b) => a.check - b.check)
    } else {
      return [...state].sort((a, b) => b.check - a.check)
    }
  },[state, sort])


  function addItem(item) {
    setPost({title:'', check:'false'})
    setState([item,...state]);
  }

  function deleteItem(item) {
    setState(state.filter((elem) => elem.id !== item.id))
  }

  return (
    <div className="App">
        <p className='description'>TO DO</p>
        <MyForm
          value={post}
          setValue={setPost}
          addPost={addItem}
        />
        <MySelect
          sort={sort}
          sorted={setSort}
          option={[{title:'Сначала завершенные', value:'true'},{title:'Сначала незавершенные', value:'false'}]}
          defaultValue={'Сортировка'}
        />
        <MyItemList
          checkValue={state}
          setCheckValue={setState}
          remove={deleteItem}
          value={sortedPost}
        />
    </div>
  );
}

export default App;
