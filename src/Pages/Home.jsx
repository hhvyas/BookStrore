import React from "react";
import BookList from "../Components/Home/BookList";
import Footer from "../Components/Home/Footer";
import { bookContext } from "../Contexts/Context";

// const a = [
//   {
//     bookName: 'aqa',
//     bookAuthor: 'string',
//     genre: 'string', // Could be changed to more specific
//     upvotes: 3
//   }
// ]

function Home() {
  const book = React.useContext(bookContext);
  const [currentPage, setCurrentPage] = React.useState(1);
  const numberOfEntries = 8;
  // Use UseEffect here, afrter loading...
  const LengthOfPagination = book.BookInfo.length / numberOfEntries + ((book.BookInfo.length % numberOfEntries) ? 1 : 0);
  // console.log(LengthOfPagination)
  const numberOfPages = Array.from({ length: LengthOfPagination }, (_, i) => i+1);
  // console.log(numberOfPages)

  const startIndexOfBookListData = (currentPage - 1) * numberOfEntries;
  const endIndexOfBookListData = startIndexOfBookListData + numberOfEntries;

  // console.log(book, 'at Home')

  const bookListData = book.BookInfo.slice(
    startIndexOfBookListData,
    endIndexOfBookListData
  );
  // console.log(bookListData, 'atsss Home')

  // Make this funcitons memoised...
  const handlePageChange = (newCurrentPage) => {
    setCurrentPage(newCurrentPage)
  };
  return (
    <>
      <BookList bookListData={bookListData} />
      <Footer
        numberOfPages={numberOfPages}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
}

export default Home;
