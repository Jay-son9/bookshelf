//
//

import { useEffect, useState } from "react";
import fetchBooks from "./api-client";

function useBooks(initialQuery) {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("initialQuery");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchBooksData(query) {
      setLoading(true);
      try {
        const items = await fetchBooks(query, controller);
        setBooks(items);
      } catch (error) {
        if (error.name !== "Abort Error") {
          console.error("Failed to fetch books: ", error);
        }
      } finally {
        setLoading(false);
      }
    }

    if (searchTerm) {
      fetchBooksData(searchTerm);
    }

    // return () => {
    //   controller.abort();
    // };
  }, [searchTerm]);

  return { books, loading, setSearchTerm };
}

export default useBooks;
