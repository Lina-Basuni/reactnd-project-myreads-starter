import React, { Component } from 'react';

import Book from './Book';

class Shelf extends Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {
            this.props.books
            .map(
              (book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  thumbnail={
                    book.imageLinks?
                    book.imageLinks.thumbnail :
                    ''
                  }
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

export default Shelf
