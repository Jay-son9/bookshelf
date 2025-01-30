/* eslint-disable react/prop-types */
//

function BookCard({ book, onSeeMore }) {
  const {
    title = "No Title Available",
    authors = ["Unknown Authors"],
    imageLinks = {},
  } = book.volumeInfo;

  const thumbnail = imageLinks.thumbnail || 'https://placehold.co/150x250'

  return (
    <div className="col-md-3 mb-3 ">
      <div className="card ">
        <img
          className="card-img-top img-responsive"
          src={thumbnail}
          alt={title}
        />
        <div className="d-flex flex-column justify-content-center align-items-center card-body pt-4">
          <h5 className="card-title">{book.volumeInfo.title}</h5>
          <p className="card-text">{authors.join(', ')}</p>
          <button
            onClick={() => onSeeMore(book)}
            className="btn btn-primary w-50"
            type="submit"
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
