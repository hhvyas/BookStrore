import React from "react";
import "../css/BookDescription/DescriptionContent.css";
import Comments from "./Comments";
import Description from "./Description";
import { bookContext } from "../../../Contexts/Context";
function DescriptionContent() {
  const book = React.useContext(bookContext);
  // console.log(book)
  return (
    <>
      {book && (
        <>
          <Description />
          {/* <Comments /> */}
          <div className="book-summary">
            <h3>Summary</h3>
            <p>
              {book.Summary}  
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default DescriptionContent;
