import React from 'react'
import { BookStoreContext } from '../stores/booksStore'
import { useObserver } from 'mobx-react'

const BookCount = () => {
  const store = React.useContext(BookStoreContext)

  return useObserver(() => (
    <div>
      <h3>Arkistoissa on kirjoja (suoraan storesta): {store.books.length} </h3>
      <h3>Arkistoissa on kirjoja (storesta getter): {store.bookCount}</h3>
    </div>
  ))
}

export default BookCount
