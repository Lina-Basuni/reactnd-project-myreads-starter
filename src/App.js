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

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books:books })
    })
  }

  moveBooks=(book,shelf)=>{
    BooksAPI.update(book,shelf)
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
