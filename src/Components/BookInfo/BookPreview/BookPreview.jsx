import React from 'react'
import BookDetails from './BookDetails'
import BookImageLarge from './BookImageLarge'
import '../css/BookPreview/BookPreview.css'

function BookPreview() {
  return (
    <div className='book-preview'>
        <BookImageLarge />
        <BookDetails/>
    </div>
  )
}

export default BookPreview