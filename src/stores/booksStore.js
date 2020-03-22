import React from 'react'
import { useLocalStore } from 'mobx-react'

export const BookStoreContext = React.createContext()

const BookStoreProvider = ({ children }) => {
  const bookStore = useLocalStore(() => ({
    books: ['Taru sormusten herrasta'],
    addBook: b => {
      bookStore.books.push(b)
    },
    get bookCount() {
      return bookStore.books.length
    }
  }))

  return (
    <BookStoreContext.Provider value={bookStore}>
      {children}
    </BookStoreContext.Provider>
  )
}

export default BookStoreProvider
