import React from "react";
import { BsCart2 } from "react-icons/bs";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import "../css/BookPreview/PriceAndCartReview.css";
import { bookContext } from "../../../Contexts/Context";
function PriceAndCartReview({ bookQuantity }) {
  const book = React.useContext(bookContext);
  const [review, setReview] = React.useState({
    like: false,
  });

  const handleLike = () => {
    if (review.like) {
      // localStorage.setItem(
      //   "CurrentBook",
      //   JSON.stringify({
      //     ...JSON.parse(localStorage.getItem("CurrentBook")),
      //     Likes: JSON.parse(localStorage.getItem("CurrentBook")).Likes - 1,
      //   })
      // );
      book.Likes = book.Likes - 1;
    } else {
      // localStorage.setItem(
      //   "CurrentBook",
      //   JSON.stringify({
      //     ...JSON.parse(localStorage.getItem("CurrentBook")),
      //     Likes: JSON.parse(localStorage.getItem("CurrentBook")).Likes + 1,
      //   })
      // );

      book.Likes = book.Likes + 1;
    }
    setReview({ like: !review.like });
  };
  return (
    <>
      {book && (
        <>
          <div className="book-preview-price">
            <div className="price">
              <h3>Rs. {book.Price * bookQuantity}</h3>
            </div>
            <div className="add-to-cart">
              <button>
                <span>
                  <BsCart2 />
                  <span>Add to Cart</span>
                </span>
              </button>
            </div>
          </div>

          <div className="review">
            {/* Onclick Change the color */}
            <button onClick={handleLike} style={{cursor: "auto"}}>
              {review.like ? (
                <FcLike style={{cursor: "pointer"}}/>
              ) : (
                <FcLikePlaceholder style={{cursor: "pointer"}}/>
              )}
            </button>
            {book.Likes}
          </div>
        </>
      )}
    </>
  );
}

export default PriceAndCartReview;
