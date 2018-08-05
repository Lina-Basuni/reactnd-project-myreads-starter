import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MainPage from './MainPage';
import Book from './Book';

class SearchPage extends Component{

  render(){

    return(
      <div className="search-books">
        <div className="search-books-bar">

          <Link
          to='/'
          className="close-search" >
          Close</Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.props.query}
              onChange={
                (event)=>{
                  this.props.changeQuery(event.target.value)
                }
              }
            />


          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {
            this.props.searchedBooks
            .map(
              (searchedBook) => (
              <li key={searchedBook.id}>
                <Book
                  thumbnail={
                    searchedBook.imageLinks?
                    searchedBook.imageLinks.thumbnail :
                    ''
                  }
                  book={searchedBook}

                  bookTitle={searchedBook.title}
                  bookAuthors={searchedBook.authors}
                  bookId={searchedBook.id}
                  bookShelf={searchedBook.shelf}
                  moveBooks={this.props.moveBooks}
                />
              </li>
              )
            )

          }

          </ol>
        </div>
      </div>
    )
  }

}

export default SearchPage;
