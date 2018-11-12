import React from 'react'
import PropType from 'prop-types'

const StateChanger = props => {

  const { book, categoryChagerOptions, handleChangeCategory } = props;
  const shelf = book.shelf || 'none';
  return (
    <select value={shelf} onChange={event => handleChangeCategory(book, event.target.value)}>
      {categoryChagerOptions.map(e => (
        <option key={e.value} value={e.value} disabled={e.disabled} >{e.label}</option>
      ))}
    </select>
  )
}

StateChanger.propTypes = {
  book: PropType.object.isRequired,
  categoryChagerOptions: PropType.array.isRequired,
  handleChangeCategory: PropType.func.isRequired,
};

export default StateChanger