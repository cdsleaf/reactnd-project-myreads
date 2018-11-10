# MyReads Project

This is a Bookshelf Project for React Fundamentals course's assessment for [Udacity](https://www.udacity.com/)'s [React React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019)

This App allows you to select and categorize books you have read, are currently reading, or want to read.

## Table of contents

- [Quick Start](#quick-start)
- [Documentation](#documentation)

## Quick Start

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Documentation

### Source Code Structure

```bash
├── README.md
├── LICENSE
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── action
    │   └──BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    ├── components
    │   ├── App.css # Styles for your app. Feel free to customize this as you desire.
    │   ├── App.js # This is the root of your app. Contains static HTML right now.
    │   ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    │   ├──
    │   ├──
    │   └──
    │
    │
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
    
    
```

### App Functionality

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

 - Currently Reading
 - Want to Read
 - Read

 Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

