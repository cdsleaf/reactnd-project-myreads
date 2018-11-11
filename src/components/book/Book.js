import React, { Component } from 'react'
import StateChanger from './StateChanger'

class Book extends Component {

  render() {
    const {book, CategoryChagerOptions, handleChangeCategory} = this.props;
    const {title, authors, imageLinks} = book;
    const imageUrl = imageLinks.thumbnail;
      return (
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageUrl})` }}></div>
              <div className="book-shelf-changer">
                <StateChanger book={book} 
                  CategoryChagerOptions={CategoryChagerOptions}
                  handleChangeCategory={handleChangeCategory} />
              </div>
              </div>
            <div className="book-title">{title}</div>
          <div className="book-authors">{authors.join(', ')}</div>
        </div>
        )
    }
}

export default Book