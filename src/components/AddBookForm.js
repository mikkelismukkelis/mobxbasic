import React, { useState } from 'react'
import { BookStoreContext } from '../stores/booksStore'

const AddBookForm = () => {
  const [book, setbook] = useState('')
  const store = React.useContext(BookStoreContext)
  const submitForm = e => {
    e.preventDefault()
    store.addBook(book)
    setbook('')
  }

  const handleInputChange = e => {
    e.preventDefault()
    setbook(e.target.value)
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="bookName"
          onChange={handleInputChange}
          value={book}
        />

        <button type="submit">Lisää kirja</button>
      </form>
    </div>
  )
}

export default AddBookForm
