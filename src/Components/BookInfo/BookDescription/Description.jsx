import React from "react";
import { bookContext } from "../../../Contexts/Context";
function Description() {
  const book = React.useContext(bookContext);
  return (
    <>
      {book && (
        <>
          <div className="book-description-content">
            <ul>
              <li>
                <strong>Author</strong> - {book.Author}
              </li>
              <li>
                <strong>Publisher</strong> - {book.Publisher}
              </li>
              <li>
                <strong>Edition</strong> - {book.Edition}
              </li>
              <li>
                <strong>Binding</strong> - {book.Binding}
              </li>
              <li>
                <strong>Language</strong> - {book.Language}
              </li>
              <li>
                <strong>Pages</strong> - {book.Pages}
              </li>
              <li>
                <strong>Condition</strong> - {book.Condition}
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default Description;
