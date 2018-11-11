import React from 'react'

const StateChanger = props => {

  const { book, CategoryChagerOptions } = props;
  const shelf = book.shelf;
  return (
    <select value={shelf} onChange={event => props.handleChangeCategory(book, event.target.value)}>
      {CategoryChagerOptions.map(e => (
        <option key={e.value} value={e.value} disabled={e.disabled} >{e.label}</option>
      ))}
    </select>
  )
}

export default StateChanger