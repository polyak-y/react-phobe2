import React, { useEffect, useRef, useState } from 'react'
import TodoItem from '../TodoItem/TodoItem'
import EmptyPhone from '../EmptyPhone/EmptyPhone'
import SearchPanel from '../SearchPanel/SearchPanel'
import './TodoList.scss'
import M from "materialize-css/dist/js/materialize.min.js"
import { useSelector } from 'react-redux'
import Loader from '../Loader/Loader';

const TodoList = () => {  
  const listPhoneState = useSelector((state) => state.phoneListReducer.phoneList)
  const isLoading = useSelector((state) => state.phoneListReducer.isLoading)

  const accordionRef = useRef(null);  
  const [valueInput, setValueInput] = useState('')
  const [search, setSearch] = useState(null)
  
  useEffect(() => {  
    M.Collapsible.init(accordionRef.current, {
      accordion: false
    })    
  })

  useEffect(() => {
    const filterList = listPhoneState.filter(person => person.name.toLowerCase().indexOf(valueInput.toLowerCase().trim()) === 0)
    setSearch(filterList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listPhoneState])

  const searchHandler = (event) => { 
    setValueInput(event.target.value) 

    const filterList = listPhoneState.filter(person => {
        return person.name.toLowerCase().indexOf(event.target.value.toLowerCase().trim()) === 0
      }      
    )   
    setSearch(filterList)
  }  
  
  const arr = search ? search : listPhoneState

  let todoItem = arr.map(person => {
    return (
      <TodoItem key={person.id} {...person} /> 
    )  
  })  

  return (
    <>      
      { !isLoading 
          ? listPhoneState.length 
            ? <>
                <SearchPanel searchHandler={searchHandler} valueInput={valueInput} />
                <ul className="collapsible" ref={accordionRef}>
                  { !todoItem.length && valueInput
                    ? <li className="searchEmpty">Данные, удовлетворяющие Вашему запросу, не найдены</li>
                    : todoItem
                  }          
                </ul>
              </>
            : <EmptyPhone />
          :  <Loader />
      }      
    </>
  )
}

export default TodoList