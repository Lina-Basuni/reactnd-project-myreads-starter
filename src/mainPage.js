import React, { Component } from 'react';

import SearchPage from './SearchPage';
import Shelf from './Shelf';
import Book from './Book';

class MainPage extends Component{


  render(){

    return(
      <div className='main-page'>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Shelf books={
                this.props.books
                .filter(
                  (book) => (
                    book.shelf === "currentlyReading"
                  )
              )}
              shelfName="Currently Reading"/>

              <Shelf books={
                this.props.books
                .filter(
                  (book) => (
                    book.shelf === "wantToRead"
                  )
              )}
              shelfName="Want To Read"/>

              <Shelf books={
                this.props.books
                .filter(
                  (book) => (
                    book.shelf === "read"
                  )
              )}
              shelfName="Read"/>

            </div>
          </div>
          <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
          </div>
        </div>
      </div>
    )
  }

}

export default MainPage;
