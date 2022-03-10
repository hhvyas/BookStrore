import React from "react";
import BookList from "../Components/Home/BookList";
import Filter from "../Components/Home/Filter";
import Footer from "../Components/Home/Footer";
import { bookContext } from "../Contexts/Context";
import { useSearchParams } from "react-router-dom";
import "./Home.css";

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
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("genre"));
  const query = searchParams?.get("genre")?.split(",");
  const search = searchParams?.get("search");
  let bookInfo = book.BookInfo;
  console.log(bookInfo)
  console.log(query)
  if (query && query.length && query[0] !== "") {
    console.log('aay')
    // console.log(query.includes('Tragedy'));
    // console.log(book.BookInfo.filter(bookItem => query.find(bookItem.Genre)));
    bookInfo = bookInfo.filter((bookItem) => query.includes(bookItem.Genre)); // useMemo
    // if (currentPage !== 1)  setCurrentPage(1);
  }
  if (search){
    
  }
  console.log('bookInfo', bookInfo)

  const numberOfEntries = 8;

  const LengthOfPagination = React.useMemo(
    () =>
      bookInfo.length / numberOfEntries +
      (bookInfo.length % numberOfEntries ? 1 : 0),
    [bookInfo, numberOfEntries]
  );
  const numberOfPages = React.useMemo(
    () => Array.from({ length: LengthOfPagination }, (_, i) => i + 1),
    [LengthOfPagination]
  );

  const startIndexOfBookListData = (currentPage - 1) * numberOfEntries;
  const endIndexOfBookListData = startIndexOfBookListData + numberOfEntries;

  // console.log(book, 'at Home')

  const bookListData = bookInfo.slice(
    startIndexOfBookListData,
    endIndexOfBookListData
  );
  // console.log(bookListData, 'atsss Home')

  // Make this funcitons memoised...
  const handlePageChange = (newCurrentPage) => {
    setCurrentPage(newCurrentPage);
  };
  return (
    <>
      <div className="home-body">
        <BookList bookListData={bookListData} />
        <Filter style={{ width: "30%" }} setCurrentPage={setCurrentPage}/>
      </div>
      <Footer
        numberOfPages={numberOfPages}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
}

export default Home;
