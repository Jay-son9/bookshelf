/* eslint-disable react/prop-types */
//
//
function BookDetail({ book, onClose }) {
  const {
    title = "No Title Available",
    authors = ["Unknown Authors"],
    imageLinks = {},
    description = "No description available",
  } = book;
  const thumbnail = imageLinks.thumbnail || "https://placehold.co/180x280";

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content border-dark">
          <div className="modal-header text-white bg-dark">
            <h5 className="modal-title">{title}</h5>
            <button
            className="btn btn-danger m-4"
            type="button"
            onClick={onClose}
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          </div>
          <div className="modal-body">
            <img src={thumbnail} alt={title} className="img-fluid mb-3" />
            <p>
              <strong>Authors:</strong> {authors.join(", ")}
            </p>
            <p>
              <strong>Published Date:</strong> {book.publishedDate}
            </p>
            <p>
              <strong>Description:</strong> {description}
            </p>
          </div>
          <div className="modal-footer bg-dark">
            <button type="button" className="btn btn-danger" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
