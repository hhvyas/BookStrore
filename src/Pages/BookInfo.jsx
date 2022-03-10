import React from 'react'
import { useParams } from 'react-router-dom'
import BookDescription from '../Components/BookInfo/BookDescription/BookDescription'
import BookPreview from '../Components/BookInfo/BookPreview/BookPreview'
import RelatedBooks from '../Components/BookInfo/RelatedBooks/RelatedBooks'
import { bookContext } from '../Contexts/Context'
import allBooks from '../data.json';


function BookInfo() {
  const [book, setBook] = React.useState({});
  let { bookID } = useParams();
  bookID = bookID.split('-')[0];

  React.useEffect(() => {
    console.log('useEffect Run')
    for (let i=0;i<allBooks.BookInfo.length;i++){
      const currentBook = allBooks.BookInfo[i];
      if (currentBook["Book_ID"] === bookID){
        // console.log('Book ID Changed...', currentBook["Book_ID"])
        // localStorage.setItem('CurrentBook', JSON.stringify(currentBook));
        setBook(currentBook);
        window.scrollTo(0,0)
      }
    }
   }, [bookID]);
  return (
    <bookContext.Provider value={book}>
      <BookPreview />
      <BookDescription />
      <RelatedBooks />
    </bookContext.Provider>
  )
}

export default BookInfo