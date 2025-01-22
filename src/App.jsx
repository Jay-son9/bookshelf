// import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
// import fetchBooks from "./services/api-client";
import useBooks from "./services/useBooks";
import { useState } from "react";
import BookDetail from "./components/BookDetail";

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const { books, loading, setSearchTerm } = useBooks("fiction");
  // const [books, setBooks] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("Java");
  // const [loading, setLoadsing] = useState(false);

  // url: https://www.googleapis.com/books/v1/volumes?q=javascript

  // useEffect(() => {
  //   fetchData();

  // }, [searchTerm]);

  // const fetchData = async () => {
  //   setLoadsing(true);
  //   try {
  //     const items = await fetchBooks(searchTerm);
  //     setBooks(items);
  //     setLoadsing(false);
  //   } catch (error) {
  //     if (error.name !== "abort error") {
  //       console.log("Failed to fetch books:", error);
  //     }
  //   } finally {
  //     setLoadsing(false);
  //   }
  // };

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
        <NavBar onSearch={handleSearch} />

        {loading ? (
          <p className="placeholder-glow display-3 text-body-secondary">
            <span className="placeholder col-12">Loading...</span>
          </p>
        ) : (
          <BookList books={books} onSeeMore={handleSeeMore} />
        )}
{/* 
        {selectedBook && <p>{selectedBook.volumeInfo.title}</p>} */}

        <Footer />

     { selectedBook &&  <BookDetail book={selectedBook} onClose = {handleCloseModal} />}
      </div>
    </>
  );
}

export default App;
