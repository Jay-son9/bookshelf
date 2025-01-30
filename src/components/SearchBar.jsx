/* eslint-disable react/prop-types */
//
//

import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    onSearch(searchTerm);
    setSearchTerm('')
  }

  return (
    <form onSubmit={handleSubmit} className="d-flex">
      <input
        className="form-control me-2"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="search for books"
      />
    </form>
  );
}

export default SearchBar;
