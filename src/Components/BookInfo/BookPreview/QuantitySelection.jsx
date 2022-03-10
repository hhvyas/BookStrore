import React from "react";
import "../css/BookPreview/QuantitySelection.css";
import { bookContext } from "../../../Contexts/Context";
function QuantitySelection({handleQuantitiyDecrease, handleQuantitiyIncrease, bookQuantity}) {
  const book = React.useContext(bookContext);
  function DecrementButtonDisableConditions(){
    // console.log(!book.isAvailable || bookQuantity === 1)
    return (!book.isAvailable || bookQuantity === 1)
  }
  function IncrementButtonDisableConditions(){
    // console.log((!book.isAvailable || book.QuantitiyLeft <= bookQuantity || bookQuantity >= 50)
    

    return (!book.isAvailable || book.QuantitiyLeft <= bookQuantity || bookQuantity >= 50)
  }
  return (
    <>
      {book && (
        <>
          <div className="quantity-selection">
            <div className="quantity-selection-quantitiy">
              <p>QTY</p>
            </div>
            <div className="quantity-selection-buttons">
              <button
                onClick={handleQuantitiyDecrease}
                disabled={DecrementButtonDisableConditions()}
                className={`${DecrementButtonDisableConditions() ? 'button-disbled' : ''}`}
              >
                <span>-</span>
              </button>
              <p>{bookQuantity}</p>
              <button
                onClick={handleQuantitiyIncrease}
                disabled={IncrementButtonDisableConditions()}
                className={`${IncrementButtonDisableConditions() ? 'button-disabled' : ''}`}
              >
                <span>+</span>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default QuantitySelection;
