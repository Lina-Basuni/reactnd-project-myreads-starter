import React from 'react';

import MainPage from './MainPage';
import SearchPage from './SearchPage';
import Shelf from './Shelf';
import Book from './Book';


import * as BooksAPI from './BooksAPI'
import './App.css';

class BooksApp extends React.Component {
  state={
    books:[],
    searchedBooks:[],
    query:''

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

  changeQuery=(query)=>{
    this.setState({query:query})
  }

  searchBooks=(query)=>{
    BooksAPI.search(query).then((searchedBooks)=>{
      this.setState({ searchedBooks:searchedBooks })
    })
  }

  render() {
    return (
      <div className="app">
        <SearchPage
          searchedBooks={this.state.searchedBooks}
          query={this.state.query}
          searchBooks={this.searchBooks}
          changeQuery={this.changeQuery}
        />
      </div>
    )
  }
}

export default BooksApp
