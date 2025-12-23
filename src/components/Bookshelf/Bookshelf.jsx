import { useState } from "react"

function Bookshelf () {

  const [book, setBook] = useState([])
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  })
  
  const handleSubmit = (event) => {
    event.preventDefault()

    const allBooks = {
      title: newBook.title,
      author: newBook.author,
    }

    setBook([...book, allBooks])

    setNewBook({
    title: "",
    author: "",
  })
  }
  
  const handleInputChange  = (event) => {
    setNewBook({...newBook, [event.target.name]: event.target.value})
  }

  return (
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>

          <form onSubmit={handleSubmit}>

            <label htmlFor="title">Title: </label>
            <input onChange={handleInputChange} name="title" id="title" value={newBook.title}  type="text" />

            <label htmlFor="author">Author: </label>
            <input onChange={handleInputChange} type="text" name="author" id="author" value={newBook.author} />

            <button>Submit</button>

          </form>

        </div>
        <div className="bookCardsDiv">{book.map((oneBook) => <div>
          <p>Title: {oneBook.title}</p>
          <p>Author: {oneBook.author}</p>
        </div>
      )}</div>
      </div>
  )
}

export default Bookshelf