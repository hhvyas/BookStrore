import React, { useContext } from 'react'
import BookItem from '../../Home/BookItem'
import '../css/RelatedBooks/RelatedBooks.css'
import { bookContext } from '../../../Contexts/Context'
import allBookData from '../../../data.json';

function RelatedBooks() {

  // const [relatedBooks, setRelatedBooks] = React.useState();
  const book = useContext(bookContext)

  let relatedBooks = allBookData.BookInfo.filter(item => (item.Genre === book.Genre && item.Book_name !== book.Book_name)).slice(0, 4);
  console.log(relatedBooks);
  return (
    <div className='related-books'>
     <h3>Related Books</h3>
     <div className="related-books-list">
     {
          relatedBooks.map(item => <BookItem book={item} key={item.Book_ID}/> )
            // Do pass ArrayyOfBooks.map() ==> props --> BookItemType
        }
       {/* <BookItem /> */}
     </div>
    </div>
  )
}

export default RelatedBooks