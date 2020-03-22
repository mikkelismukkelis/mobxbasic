import React from 'react'
import { BookStoreContext } from '../stores/booksStore'
import { useObserver } from 'mobx-react'

const BookList = () => {
  const store = React.useContext(BookStoreContext)
  return useObserver(() => (
    <ul>
      {store.books.map(b => (
        <li key={b}>{b}</li>
      ))}
    </ul>
  ))
}

export default BookList
