import React, { Component } from 'react'
import Book from './../book/Book'

class BookShelf extends Component {

  render() {
    const { title, books, CategoryChagerOptions, handleChangeCategory } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">              
            {books.map(book => (
              <li key={book.id}>
                <Book book={book} 
                  CategoryChagerOptions={CategoryChagerOptions}
                  handleChangeCategory={handleChangeCategory} /> 
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf