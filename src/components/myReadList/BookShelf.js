import React from 'react'
import Book from './../book/Book'
import PropType from 'prop-types'

const BookShelf = props => {

  const { title, books, categoryChagerOptions, handleChangeCategory } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">              
          {books.map(book => (
            <li key={book.id}>
              <Book book={book} 
                categoryChagerOptions={categoryChagerOptions}
                handleChangeCategory={handleChangeCategory} /> 
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

BookShelf.propTypes = {
  title: PropType.string.isRequired,
  books: PropType.array.isRequired,
  categoryChagerOptions: PropType.array.isRequired,
  handleChangeCategory: PropType.func.isRequired,
};

export default BookShelf