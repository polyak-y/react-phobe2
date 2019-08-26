import React, { useEffect } from 'react'
import Menu from './components/Menu/Menu'
import TodoList from './components/TodoList/TodoList'
import AddNewPerson from './components/AddNewPerson/AddNewPerson'
import { Route, Switch, Redirect } from 'react-router-dom'
import { addListPhoneInState } from './store/actions/actionFunc'
import { useDispatch, useSelector } from 'react-redux'
import './App.scss'

function App() {     
  const dispatch = useDispatch(); 
  const listReduce = useSelector(state => state.phoneListReducer.phoneList)
  
  useEffect(() => {  
    const list = JSON.parse(localStorage.getItem('phoneList')) || []
    list.sort((a, b) =>  a.name.localeCompare(b.name))
    dispatch(addListPhoneInState(list));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(() => {
    localStorage.setItem('phoneList', JSON.stringify(listReduce))  
  },[listReduce])
  
  return (
    <div className="App">
      <Menu />          
      <Switch>            
        <Route path="/add" component={AddNewPerson} /> 
        <Route path="/" component={TodoList} />                   
        <Redirect to={'/'}/> 
      </Switch>      
    </div>
  );
}

export default App
