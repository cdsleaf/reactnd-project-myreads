import React from 'react'
import StateChanger from './StateChanger'
import PropType from 'prop-types'

const Book = props => {

  const {book, categoryChagerOptions, handleChangeCategory} = props;
  const {title, authors, imageLinks} = book;
  const imageUrl = (imageLinks && imageLinks.thumbnail) || 'https://books.google.co.nz/googlebooks/images/no_cover_thumb.gif';
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageUrl})` }}></div>
          <div className="book-shelf-changer">
            <StateChanger book={book} 
              categoryChagerOptions={categoryChagerOptions}
              handleChangeCategory={handleChangeCategory} />
          </div>
          </div>
        <div className="book-title">{title}</div>
      <div className="book-authors">{authors && authors.join(', ')}</div>
    </div>
  )
}

Book.propTypes = {
  book: PropType.object.isRequired,
  categoryChagerOptions: PropType.array.isRequired,
  handleChangeCategory: PropType.func.isRequired,
};

export default Book