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
    this.searchBooks(query)
  }

  searchBooks=(query)=>{
    if(query){
      BooksAPI.search(query).then((searchedBooks)=>{
        if(searchedBooks.error){
          this.setState({searchedBooks:[]})
        }
        else{
          this.setState({ searchedBooks:searchedBooks })
        }
      })
    }else{
      this.setState({searchedBooks:[]})
    }

  }

  render() {
    return (
      <div className="app">
        {/*
        <MainPage
          books={this.state.books}
          moveBooks={this.moveBooks}
        />
        */}
        <SearchPage
          searchedBooks={this.state.searchedBooks}
          query={this.state.query}
          searchBooks={this.searchBooks}
          changeQuery={this.changeQuery}
          moveBooks={this.moveBooks}
        />
      </div>
    )
  }
}

export default BooksApp
