import React from "react";
import "./css/BookItem.css";
import { FcLike } from "react-icons/fc";

import { Link } from "react-router-dom";
// Will receive Book Display Informations...
function BookItem({ book: item }) {
  // let history = useHistory();
  // console.log(history)
  // <Link to=`/book/${item}`>
  return (
    <>
      {item && (
        <>
          <Link
            to={`/book/${item.Book_ID}-${item.Book_name.split(" ").join('-').toLowerCase()}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="book-item" key={item.Book_ID}>
              <img
                src={`${item.image_URL}`}
                className="book-item-image"
                alt={`${item.Book_name}`}
              />
              <div className="book-item-name">
                <p>{item.Book_name}</p>
              </div>
              <div className="book-item-author">
                <p>By {item.Author}</p>
              </div>
              <div className="book-item-genre">
                <p>{item.Genre}</p>
              </div>
              <div className="book-item-likes">
                <FcLike style={{ marginRight: "5px", cursor: "pointer" }} />
                {item.Likes}
              </div>
            </div>
          </Link>
        </>
      )}
    </>
  );
}

export default BookItem;
