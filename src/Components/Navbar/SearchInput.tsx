import React from 'react'
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
  return (
    <input className='nav-search' {...props}/>
  )
}

export default SearchInput