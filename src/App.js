import { useState } from 'react';
import MyForm from './Components/form/MyForm';
import MyItemList from './Components/itemList/MyItemList';
import './style/App.css';

function App() {

  const [state, setState] = useState([
    {title:'Убраться дома', check:'false'},
    {title:'Сделать уроки', check:'false'},
    {title:'Покушать морковки', check:'false'},
    {title:'Сделать сайт', check:'false'},
  ])



  function addItem(item) {
    console.log('Я отработал')
    setState([...state, item]);
  }

  function deleteItem(item) {
    setState(state.filter((elem) => elem.title !== item.title))
  }

  return (
    <div className="App">
        <MyForm
          addPost={addItem}
        />
        <MyItemList
          remove={deleteItem}
          title={'Список задач'}
          value={state}
        />
    </div>
  );
}

export default App;
