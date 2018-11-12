import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MyReadList from './myReadList/MyReadList'
import SearchBooks from './searchBooks/SearchBooks'
import * as BooksAPI from './../action/BooksAPI'
import './App.css'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      myReadBooks: [],
    }

    this.categories = [
      {value: 'currentlyReading', label: 'Currently Reading'},
      {value: 'wantToRead', label: 'Want to Read'},
      {value: 'read', label: 'Read'},
    ]

    this.categoryChagerOptions = [
      {value: 'move', label: 'Move to...', disabled: 'disabled'},
      ...this.categories,
      {value: 'none', label: 'None'},
    ]

    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.getMyReadBooks = this.getMyReadBooks.bind(this);
  }

  getMyReadBooks(){
    BooksAPI.getAll().then(returnBooks => {
      this.setState({myReadBooks: returnBooks})
    });
  }

  handleChangeCategory(book, shelf){
    
    BooksAPI.update(book, shelf).then((res) => {
      book.shelf && this.setState( state => {
        return { 
          ...state, 
          myReadBooks: state.myReadBooks.reduce( (a, e) => {
            return e.id === book.id ? 
              shelf === 'none' ? a : [ ...a, { ...e, 'shelf': shelf } ]
              : [ ...a, e ]
          }, []),
        }
      });  
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={ () => (
          <MyReadList 
            myReadBooks={this.state.myReadBooks}
            getMyReadBooks={this.getMyReadBooks}
            categories={this.categories}
            categoryChagerOptions={this.categoryChagerOptions} 
            handleChangeCategory={this.handleChangeCategory}
          />
        )}>
        </Route>
        <Route path='/search' render={ () => (
          <SearchBooks 
            myReadBooks={this.state.myReadBooks}
            categoryChagerOptions={this.categoryChagerOptions} 
            handleChangeCategory={this.handleChangeCategory}
          />
        )}>
        </Route>
      </div>
    )
  }
}
export default App