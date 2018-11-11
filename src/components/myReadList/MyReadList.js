import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import * as BooksAPI from '../../action/BooksAPI'

const CategoryChagerOptions= [
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
  
  constructor(props){
    super(props);
    this.state = {
      myReadBooks: [],
    }

    this.handleChangeCategory = this.handleChangeCategory.bind(this);
  }
  
  handleChangeCategory(book, shelf){
    
    BooksAPI.update(book, shelf).then((res) => {
      console.log(res);
      this.setState( state => {
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

  componentDidMount(){
    BooksAPI.getAll().then(returnBooks => {
      this.setState({myReadBooks: returnBooks})
    });
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
        <div>
          {Categories.map(e => (
            <BookShelf key={e.value} title={e.label} 
              books={this.state.myReadBooks.filter(book => book.shelf === e.value)}
              CategoryChagerOptions={CategoryChagerOptions} 
              handleChangeCategory={this.handleChangeCategory} />  
          ))}
        </div>
        </div>
        <div className="open-search">
          <Link to='/addBook'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default MyReadList