import React from 'react'
import { useSearchParams } from 'react-router-dom'
import '../../App.css'


// type TargetInEvent = {
//   value: string
// }

// type Event = {
//   target: TargetInEvent,
// }

type onChangeFunction = (event: any) => void

type InputProps = {
    placeholder?: string,
    value?: string,
    defaultValue?: string,
    onChange?: onChangeFunction
}

function SearchInput(props: InputProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSearchChange = (e:any) => {
    setSearchParams({search: e.target.value})
  }
  return (
    <input className='nav-search' {...props} onChange={handleSearchChange} />
  )
}

export default SearchInput