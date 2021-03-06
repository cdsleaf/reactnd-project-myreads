import React, { Component } from 'react'
import SearchBar from './SearchBar'
import * as BooksAPI from '../../action/BooksAPI'
import Book from './../book/Book'
import PropType from 'prop-types'

class SearchBooks extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchedBooks: []
    }
    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleChangeInSearchedBook = this.handleChangeInSearchedBook.bind(this);
  }

  handleSearchText(query){
    if(query.trim() === ''){
      this.setState({ searchedBooks: []});
      return;
    }
    BooksAPI.search(query.trim()).then(books => {
      
      const myReadBooksMap = new Map();
      this.props.myReadBooks.forEach(e => {
        myReadBooksMap.set(e.id, e.shelf);
      });

      this.setState({ 
        searchedBooks: books.map(book => {
          return myReadBooksMap.has(book.id) ? 
            { ...book, shelf: myReadBooksMap.get(book.id)} : 
            book;  
        })
      });
    }).catch(error => {
      this.setState({ searchedBooks: []});
    })
  }

  handleChangeInSearchedBook(book, shelf){
   
    this.setState(state => ({
      ...state, 
      searchedBooks: state.searchedBooks.reduce( (a, e) => {
        return e.id === book.id ? 
          shelf === 'none' ? a : [ ...a, { ...e, 'shelf': shelf } ]
          : [ ...a, e ]
      }, []),
    }));

    this.props.handleChangeCategory(book, shelf)
  }

  render() {
    const { categoryChagerOptions } = this.props;
    return (
      <div className="search-books">
        <SearchBar handleSearchText={this.handleSearchText}/>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchedBooks.length > 0 && this.state.searchedBooks.map(book => (
              <li key={book.id}>
                <Book book={book} 
                  categoryChagerOptions={categoryChagerOptions}
                  handleChangeCategory={this.handleChangeInSearchedBook} /> 
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

SearchBooks.propTypes = {
  categoryChagerOptions: PropType.array.isRequired,
  handleChangeCategory: PropType.func.isRequired,
};

export default SearchBooks