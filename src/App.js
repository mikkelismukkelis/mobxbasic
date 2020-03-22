import React from 'react'
import BooksStoreProvider from './stores/booksStore'
import BookList from './components/BookList'
import BookCount from './components/BookCount'
import AddBookForm from './components/AddBookForm'

const App = () => {
  return (
    <BooksStoreProvider>
      <main>
        <h1>Kirjat</h1>
        <AddBookForm />
        <BookCount />
        <BookList />
      </main>
    </BooksStoreProvider>
  )
}

export default App
