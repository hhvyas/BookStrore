import React from "react";
import "../css/BookPreview/PreviewHeader.css";
import { bookContext } from "../../../Contexts/Context";
function PreviewHeader() {

  const book = React.useContext(bookContext);

  return (
    <>
      {book && (
        <>
          <h1>{book.Book_name}</h1>
          <div className="book-preview-matadata">
            <p>Book ID:- {book.Book_ID}</p>
            <p style={{ color: `${book.isAvailable ? "green" : "red"}` }}>
              {book.isAvailable ? "Available" : "Sold Out"}
            </p>
            <p>Sold by:- {book.Publisher}</p>
          </div>
        </>
      )}
    </>
  );
}

export default PreviewHeader;
