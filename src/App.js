import { useMemo, useState } from 'react';
import MyForm from './Components/form/MyForm';
import MyItemList from './Components/itemList/MyItemList';
import MySelect from './Components/UI/select/MySelect';
import './style/App.css';

function App() {

  const [state, setState] = useState([
    {title:'Убраться дома', check:false},
    {title:'Сделать уроки', check:false},
    {title:'Покушать морковки', check:false},
    {title:'Сделать сайт', check:false},
  ])


  const [post, setPost] = useState({title:'', check:false})
  const [sort, setSort]= useState('false')

  console.log(state)

  const sortedPost = useMemo(() => {
    if (sort === 'false') {
      return [...state].sort((a, b) => a.check - b.check)
    } else {
      return [...state].sort((a, b) => b.check - a.check)
    }
  },[state, sort])


  function addItem(item) {
    setPost({title:'', check:'false'})
    setState([...state, item]);
  }

  function deleteItem(item) {
    setState(state.filter((elem) => elem.title !== item.title))
  }

  return (
    <div className="App">
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
          title={'Список задач'}
          value={sortedPost}
        />
    </div>
  );
}

export default App;
