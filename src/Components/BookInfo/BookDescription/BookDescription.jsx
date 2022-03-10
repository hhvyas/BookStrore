import React from "react";
import DescriptionContent from "./DescriptionContent";
import DescriptionNav from "./DescriptionNav";
import '../css/BookDescription/BookDescription.css'

function BookDescription() {
  return (
    <div className="book-description">
      <DescriptionNav />
      <DescriptionContent />
    </div>
  );
}

export default BookDescription;
