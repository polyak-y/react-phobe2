import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addListPhoneInState } from '../../store/actions/actionFunc'
import M from 'materialize-css/dist/js/materialize.min.js'
import './AddNewPerson.scss'

const AddNewPerson = () => {
  const dispatch = useDispatch()
  const listReduce = useSelector(state => state.phoneListReducer.phoneList)

  const [valueInput, setValueInput] = useState({
    name: '',
    phone: '',
    workPhone: '',
    dateBirth: '',
    work: ''
  })

  const changeHandler = event => {
    const key = event.target.id
    valueInput[key] = event.target.value 
    setValueInput({...valueInput})
  }

  const addPerson = (event) => {
    event.preventDefault()

    if(valueInput.name !== '' && valueInput.phone !== '') {
      const newPhone = {
        id: Math.floor(Math.random() * 1000000),
        name: valueInput.name,
        phone: valueInput.phone,
        workPhone: valueInput.workPhone || 'Запись отсутствует',
        dateBirth: valueInput.dateBirth || 'Запись отсутствует',
        work: valueInput.work || 'Запись отсутствует'
      }

      listReduce.push(newPhone)
      listReduce.sort((a, b) =>  a.name.localeCompare(b.name))      
      dispatch(addListPhoneInState([...listReduce])) 
      
      setValueInput({
        name: '',
        phone: '',
        workPhone: '',
        dateBirth: '',
        work: ''
      })

      let labels = document.querySelectorAll('.input-field label')
      for(var label of labels) {
        label.classList.remove('active')        
      }
      M.toast({html: 'Абонент добавлен!'})
    } else {
      M.toast({html: 'Заполните все обязательные поля!'})
    }
  }

  return (
    <div className="AddNewPerson">
      <h3>Добавление нового абонента</h3>
      
      <form className="z-depth-3" onSubmit={ addPerson }>
        <div className="input-field">
          <input 
            id="name" 
            type="text" 
            className="validate" 
            onChange={ changeHandler } 
            value={ valueInput.name } 
          />
          <label htmlFor="name">ФИО*</label>
        </div>
        
        <div className="input-field">
          <input 
            id="phone" 
            type="text" 
            className="validate" 
            onChange={ changeHandler } 
            value={ valueInput.phone } 
          />
          <label htmlFor="phone">Телефон*</label>
        </div>
        
        <div className="input-field">
          <input 
            id="workPhone" 
            type="text" 
            className="validate" 
            onChange={ changeHandler } 
            value={ valueInput.workPhone }
          />
          <label htmlFor="workPhone">Рабочий телефон</label>
        </div>
        
        <div className="input-field">
          <input 
            id="dateBirth" 
            type="text" 
            className="validate" 
            onChange={ changeHandler } 
            value={ valueInput.dateBirth }
          />
          <label htmlFor="dateBirth">Дата рождения</label>
        </div>
        
        <div className="input-field">
          <input 
            id="work" 
            type="text" 
            className="validate" 
            onChange={ changeHandler } 
            value={ valueInput.work }
          />
          <label htmlFor="work">Место работы</label>
        </div>

        <p className="buttonSection">
          <button className="btn waves-effect light-blue darken-3" type="submit">
            Добавить абонента<i className="material-icons right">sentiment_very_satisfied</i>
          </button>
        </p>

        <p className="smallText">* отмечены поля обязательные для заполнения</p>
      </form>
    </div>    
  )
}

export default AddNewPerson