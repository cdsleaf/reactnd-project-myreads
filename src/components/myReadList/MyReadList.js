import React, { Component } from 'react'
import BookShelf from './BookShelf'
import * as BooksAPI from '../../action/BooksAPI'

const stateChagerOptions= [
    {value: 'move', label: 'Move to...', disabled: 'disabled'},
    {value: 'currentlyReading', label: 'Currently Reading', disabled: null},
    {value: 'wantToRead', label: 'Want to Read', disabled: null},
    {value: 'read', label: 'Read', disabled: null},
    {value: 'none', label: 'None', disabled: null},
];

const Categories = [
    {value: 'currentlyReading', label: 'Currently Reading'},
    {value: 'wantToRead', label: 'Want to Read'},
    {value: 'read', label: 'Read'},
]

class MyReadList extends Component {

    state = {
        myReadBooks: []
    }

    componentDidMount(){
        BooksAPI.getAll()
        .then(returnBooks => {
            console.log(returnBooks)
            this.setState({myReadBooks: returnBooks})
        });
        //authors.join(',')
        //shelf
        //title
        //imageLinks.thumbnail
        //BooksAPI.search('art', 3)
        //.then(bookList => console.log(bookList));
      }

    render() {
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              {
                  Categories.map(e => (
                    <BookShelf key={e.value} title={e.label} books={this.state.myReadBooks.filter(book => book.shelf === e.value)} />
                  ))
              }
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )
    }
}

export default MyReadList