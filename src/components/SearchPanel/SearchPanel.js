import React from 'react'
import './SearchPanel.scss'

const SearchPanel = ({searchHandler, valueInput}) => {
  return (
    <form className="SearchPanel">
      <div className="input-field">
        <input type="text" placeholder="Поиск" onChange={searchHandler} value={valueInput} />
      </div>
    </form>
  )
}

export default SearchPanel