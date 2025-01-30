import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import useBooks from "./services/useBooks";
import { useState } from "react";
import BookDetail from "./components/BookDetail";

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const { books, loading, setSearchTerm } = useBooks("fiction");

  function handleSearch(query) {
    setSearchTerm(query);
  }

  function handleSeeMore(book) {
    setSelectedBook(book.volumeInfo);
  }

  function handleCloseModal() {
    setSelectedBook(null);
  }

  return (
    <>
      <div className="">
        <NavBar onSearch={handleSearch}/>

        {loading ? (
          <p className="spinner-border text-primary">
            <span className="visually-hidden ">Loading...</span>
          </p>
        ) : (
          <BookList books={books} onSeeMore={handleSeeMore} />
        )}
   
        <Footer />

        {selectedBook && (
          <BookDetail book={selectedBook} onClose={handleCloseModal} />
        )}
      </div>
    </>
  );
}

export default App;
