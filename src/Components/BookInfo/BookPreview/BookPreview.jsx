import React from 'react'
import BookDetails from './BookDetails'
import BookImageLarge from './BookImageLarge'
import '../css/BookPreview/BookPreview.css'
import {Link} from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";


function BookPreview() {
  return (
    <>
        <Link to='/' className='back-button-link' ><IoIosArrowBack className='back-button-icon'/></Link>
    <div className='book-preview'>
        <BookImageLarge />
        <BookDetails/>
    </div>
    </>
  )
}

export default BookPreview