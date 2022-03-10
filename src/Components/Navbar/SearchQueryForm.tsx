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
  const [searchQuery, setSearchQuery] = React.useState('');
  const handleQueryChange = (event: any): void => {
    setSearchQuery(event.target.value);
  }
  const handleQuerySubmit = (event: any): void => {
    event.preventDefault();
    alert(searchQuery);
  }
  return (
    <form className="nav-search-icon" onSubmit={handleQuerySubmit}>
        <SearchInput placeholder='Search Book' value={searchQuery} onChange={handleQueryChange}/>
        <FaSearch className='nav-search-submit' onClick={handleQuerySubmit}/>
    </form>
  )
}

export default SearchQueryForm