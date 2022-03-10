import React from 'react'
import SearchInput from './SearchInput'
import { FaSearch } from 'react-icons/fa';

// type TargetInEvent = {
//   value: string
// }

// type Event = {
//   target: TargetInEvent,
//   preventDefault: () => void
// }


function SearchQueryForm() {
  

  const handleQuerySubmit = (event: any): void => {
    // alert(searchQuery);
  }
  return (
    <form className="nav-search-icon" onSubmit={handleQuerySubmit}>
        <SearchInput placeholder='Search Book' />
        <FaSearch className='nav-search-submit' onClick={handleQuerySubmit}/>
    </form>
  )
}

export default SearchQueryForm