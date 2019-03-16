# MyReads Project

This is a Bookshelf Project for React Fundamentals course's assessment for [Udacity](https://www.udacity.com/)'s [React React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019)

This App allows you to select and categorize books you have read, are currently reading, or want to read.

## Table of contents

- [Demo](#demo)
- [Quick Start](#quick-start)
- [Documentation](#documentation)

## Demo

For a demo, check out [https://my-reads-3a074.firebaseapp.com/](https://my-reads-3a074.firebaseapp.com/)

## Quick Start

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Documentation

### Source Code Structure

```bash
├── README.md
├── LICENSE
├── SEARCH_TERMS.md 
├── package.json
├── firebaserc. 
├── firebase.json  
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── action
    │   └──BooksAPI.js
    ├── icons 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css 
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── components
       ├── App.css
       ├── App.js 
       ├── App.test.js 
       ├── book
       │   ├── Book.js
       │   └── StateChanger.js
       ├── myReadList
       │   ├── MyReadList.js
       │   └── BookShelf.js
       └── searchBooks
           ├── SearchBar.js
           └── SearchBooks.js
```

### App Functionality

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

 - Currently Reading
 - Want to Read
 - Read

 Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

