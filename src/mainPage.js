import React, { Component } from 'react';

import Book from './Book';
import Shelf from './Shelf'

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
              <Shelf shelfName="Currently Reading"/>
              <Shelf shelfName="Want To Read"/>
              <Shelf shelfName="Read"/>
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
