import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import PropType from 'prop-types'

class MyReadList extends Component {

  componentDidMount(){
    this.props.getMyReadBooks();
  }

  render() {
    const { myReadBooks, categories, categoryChagerOptions, handleChangeCategory } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
        <div>
          {categories.map(e => (
            <BookShelf key={e.value} title={e.label} 
              books={myReadBooks.filter(book => book.shelf === e.value)}
              categoryChagerOptions={categoryChagerOptions} 
              handleChangeCategory={handleChangeCategory} />  
          ))}
        </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

MyReadList.propTypes = {
  myReadBooks: PropType.array.isRequired,
  categories: PropType.array.isRequired,
  categoryChagerOptions: PropType.array.isRequired,
  handleChangeCategory: PropType.func.isRequired,
};

export default MyReadList