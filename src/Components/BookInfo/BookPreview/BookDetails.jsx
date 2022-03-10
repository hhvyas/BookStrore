import React from "react";
import PreviewHeader from "./PreviewHeader";
import QuantitySelection from "./QuantitySelection";
import PriceAndCartReview from "./PriceAndCartReview";
import BuyNow from "./BuyNow";
import "../css/BookPreview/BookDetails.css";
import { bookContext } from "../../../Contexts/Context";

function BookDetails() {
  const book = React.useContext(bookContext);
  const [bookQuantity, setBookQuantity] = React.useState(1);
  const handleQuantitiyDecrease = () => {
    if (bookQuantity <= 1) {
      return;
    }
    setBookQuantity((prevState) => prevState - 1);
  };
  const handleQuantitiyIncrease = () => {
    if (book.QuantityLeft < bookQuantity) {
      return;
    }
    setBookQuantity((prevState) => prevState + 1);
  };
  return (
    <div className="book-preview-details">
      <PreviewHeader />
      <QuantitySelection
        handleQuantitiyDecrease={handleQuantitiyDecrease}
        handleQuantitiyIncrease={handleQuantitiyIncrease}
        bookQuantity={bookQuantity}
      />
      <div className="horizontal-line"></div>
      <PriceAndCartReview bookQuantity={bookQuantity} />
      <BuyNow />
    </div>
  );
}

export default BookDetails;
