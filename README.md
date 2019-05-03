# MyReads

This is  the final assessment project for Udacity's React Fundamentals course. It is an app that
lets you categorize your books into three categories :
* Currently Reading
* Want To Read
* Read

# How To Use

* On starting the app the main page is displayed containing your books
* On each book there is drop down list that lets you choose the shelf for that book
* When you choose the shelf the book is moved to that shelf instantly
* There is a search button that transfers you to the search page
* On the search page you can search for any book using the book title or the author
* Similarly there is a drop down list on each book on the search results that lets you choose the shelf for that book
* When you choose the shelf the book is moved to that shelf on the main page

## Installing the App

To get started using the app right away:

* clone the app by running `https://github.com/Lina-Basuni/reactnd-project-myreads-starter.git` on your terminal
* cd into the app repository you created
* install the Apps dependencies with `npm install` or `yarn install`
* start the development server with `npm start` or `yarn start`

## Backend Server

A backend server was provided for me to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods I used to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Dependencies

* The Backend server was provided for me by Udacity
* The HTML and CSS of the app was provided for me by Udacity

