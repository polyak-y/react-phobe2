import React from 'react'
import './EmptyPhone.scss'
import {withRouter} from 'react-router-dom'

const EmptyPhone = (props) => {
  return (
    <div className="EmptyPhone z-depth-3">
      <h3 className="EmptyPhone__h3">В вашем справочнике нет ни одного абонента!</h3>
      <p className="EmptyPhone__button">
        <button 
          className="btn waves-effect  light-blue darken-3" 
          onClick={() => props.history.push('/add')}
        >
          Добавить абонента<i className="material-icons right">sentiment_very_satisfied</i>
        </button>
      </p>          
    </div>
  )
}

export default withRouter(EmptyPhone)