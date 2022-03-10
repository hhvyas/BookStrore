import React from "react";
import BookItem from "./BookItem";
import "./css/BookList.css";
// Will recieve JSON data of book items...
// Change props typescript according to the data, now any is defined

// type BookItemType = {
//     bookName: string,
//     bookAuthor: string,
//     genre: string, // Could be changed to more specific
//     upvotes: number
// }
// type BookListProps = {
//     payload: BookItemType[]
// }

function BookList(props) {
  const { bookListData } = props;
  // console.log(bookListData)
  return (
    <div className="book-list">
      {
        bookListData.map((item, index) => (
          <BookItem book={item} key={index}/>
        ))
        // Do pass ArrayyOfBooks.map() ==> props --> BookItemType
      }
    </div>
  );
}

export default BookList;
