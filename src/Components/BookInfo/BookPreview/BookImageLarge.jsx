import React, { useContext } from "react";
import "../css/BookPreview/BookImageLarge.css";
import { bookContext } from '../../../Contexts/Context'
function BookImageLarge() {
  const book = useContext(bookContext)
  return (
    <div className="book-preview-image">
      <img src={`${book.image_URL}`} alt="book" />
    </div>
  );
}

export default BookImageLarge;
