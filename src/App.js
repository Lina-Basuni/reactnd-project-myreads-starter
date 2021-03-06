import React from 'react';
import { Route } from 'react-router-dom';

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
    BooksAPI.update(book,shelf).then(()=>{
      this.getBooks()
    })
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
          this.getBooks()
        }
        else{
          this.setState({ searchedBooks:searchedBooks })
          this.getBooks()
        }
      })
    }else{
      this.setState({searchedBooks:[]})
      this.getBooks()
    }

  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={()=>(
          <MainPage
            books={this.state.books}
            moveBooks={this.moveBooks}
          />
        )}/>
        <Route path='/search' render={()=>(
          <SearchPage
            searchedBooks={this.state.searchedBooks}
            query={this.state.query}
            searchBooks={this.searchBooks}
            books={this.state.books}
            changeQuery={this.changeQuery}
            moveBooks={this.moveBooks}
          />
        )}/>

      </div>
    )
  }
}

export default BooksApp
