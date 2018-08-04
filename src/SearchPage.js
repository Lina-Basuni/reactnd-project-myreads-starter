import React, { Component } from 'react';

import MainPage from './MainPage';
import Book from './Book';

class SearchPage extends Component{

  render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.props.query}
              onChange={
                (event)=>{
                  this.props.changeQuery(event.target.value)
                  if (this.props.query && this.props.query.length >= 1) {
                    if (this.props.query.length % 2 === 0) {
                      this.props.searchBooks(event.target.value)
                    }
                  }
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
              (book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  bookImgLink={book.imageLinks.thumbnail}
                  bookTitle={book.title}
                  bookAuthors={book.authors}
                  bookId={book.id}
                  bookShelf={book.shelf}
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
