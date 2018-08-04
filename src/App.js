import React from 'react';

import MainPage from './MainPage';
import SearchPage from './SearchPage';
import Shelf from './Shelf';
import Book from './Book';


import * as BooksAPI from './BooksAPI'
import './App.css';

class BooksApp extends React.Component {
  state={
    books:[]

  }
  getBooks=()=>{
    BooksAPI.getAll().then((books) => {
      this.setState({ books:books })
    })
  }

  componentDidMount() {
    this.getBooks()
  }

  moveBooks=(book,shelf)=>{
    BooksAPI.update(book,shelf)
    this.getBooks()
  }

  render() {
    return (
      <div className="app">
        <MainPage books={this.state.books}
        moveBooks={this.moveBooks}/>
      </div>
    )
  }
}

export default BooksApp
