/* eslint-disable react/prop-types */
//

import BookCard from "./BookCard";

//
function BookList({ books, onSeeMore }) {
  return (
    <div className="row">
      {books.map((book) => (
        // <p key={book.id}>{book.volumeInfo.title}</p>
        <BookCard key={book.id} book={book} onSeeMore={onSeeMore} />
       
      ))}
    </div>
  );
}

export default BookList;
