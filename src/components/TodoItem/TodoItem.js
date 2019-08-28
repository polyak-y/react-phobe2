import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  updateListPhoneInState } from '../../store/actions/actionFunc'
import M from 'materialize-css/dist/js/materialize.min.js'
import './TodoItem.scss'


const TodoItem = (props) => {
  const [readonlyState, setReadonlyState] = useState(true)
  const [arrowState, setArrowState] = useState(false)
  const [valueInput, setValueInput] = useState({...props})
  const dispatch = useDispatch(); 
  const listReduce = useSelector(state => state.phoneListReducer.phoneList)

  const editPhone = () => {
    setReadonlyState(false)
  }

  const updatePhone = () => {
    
    if(valueInput.name !== '' && valueInput.phone !== '' ) {
      setReadonlyState(true)

      const editPhone = {...valueInput}

      for(var key in editPhone) {
        if(!editPhone[key]) editPhone[key] = 'Запись отсутствует'
      }
      setValueInput({...editPhone})

      const ind = listReduce.findIndex(person => person.id === valueInput.id)      
      const newListReduce = [...listReduce] 
      newListReduce[ind] = editPhone

      dispatch(updateListPhoneInState(newListReduce)) 
    } else {
      M.toast({html: 'Поля "Ф.И.О" и "Телефон" обязательны для заполнения!'})
    }
  }

  const changeHandler = event => {
    const key = event.target.dataset.name
    const newValueInput = {...valueInput}
    newValueInput[key] = event.target.value
    setValueInput(newValueInput)
  }

  const deletePerson = (event) => {
    event.stopPropagation()
    const newList = listReduce.filter(person => person.id !== props.id)
    dispatch(updateListPhoneInState(newList)) 
    M.toast({html: 'Абонент из списка удален!'})
  }

  const cls = ["material-icons", "blue-text", "text-darken-4", "arrowRotate"]
  if(arrowState) cls.push('topArrow')
  
  return (
    <li>
      <div 
        className="collapsible-header blue-grey lighten-5" 
        onClick={() => setArrowState(!arrowState)}
      >
        <i className={cls.join(' ')} >arrow_downward </i>
        <i className="material-icons blue-text text-darken-4">contact_phone</i>
        { valueInput.name }
        <i 
          className="material-icons orange-text text-darken-4" 
          onClick={deletePerson}
        >delete_forever</i>
      </div> 

      <div className="collapsible-body">
        {
          readonlyState 
            ?<button className="btn-floating collapsible-body-button waves-effect waves-light green darken-3" onClick={editPhone}>
                <i className="material-icons">edit</i>
              </button>
            : <button className="btn-floating collapsible-body-button waves-effect waves-light light-blue accent-2" onClick={updatePhone}>
                <i className="material-icons">sync</i>
              </button>
        }        

        <ul className="collection">
          <li className="collection-item">
            <strong>ФИО*: </strong>
            <input 
              type="text" 
              data-name="name" 
              onChange={ changeHandler } 
              value={ valueInput.name } 
              readOnly={ readonlyState } 
            />
          </li>
         
          <li className="collection-item">
            <strong>Телефон*: </strong>
            <input 
              type="text" 
              data-name="phone" 
              onChange={ changeHandler } 
              value={ valueInput.phone } 
              readOnly={ readonlyState } 
            />
          </li>

          <li className="collection-item">
            <strong>Рабочий телефон: </strong>
            <input 
              type="text" 
              data-name="workPhone" 
              onChange={ changeHandler } 
              value={ valueInput.workPhone } 
              readOnly={ readonlyState }
            />
          </li>

          <li className="collection-item">
            <strong>Дата рождения: </strong>
            <input 
              type="text" 
              data-name="dateBirth" 
              onChange={ changeHandler } 
              value={ valueInput.dateBirth } 
              readOnly={ readonlyState }
            />
          </li>

          <li className="collection-item">
            <strong>Место работы: </strong>
            <input 
              type="text" 
              data-name="work" 
              onChange={ changeHandler } 
              value={ valueInput.work } 
              readOnly={ readonlyState }
            />
          </li>           
        </ul>
      </div>
    </li>
  )
}

export default TodoItem