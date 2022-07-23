import { useState } from 'react'
import Button from './Button'
import Input from './Input'


const Search = ({compare}) => {
  const[entry, setEntry] = useState('')

  function textFieldOnChange(e)
{
  setEntry(e.target.value);
}


  const onSubmit = (e)=>{
  	e.preventDefault()
  	if(!entry) {
  		alert('Please enter a name')
  		return
  	}
  	compare(entry)
  	setEntry('')
  	}
  return (
    <div>
    	<div>
    		<Input text ={'Type contact name'} entry={entry}
    		value = {entry} onChange={textFieldOnChange} type={'text'}/>
    	</div>
      <Button text='Search' form={onSubmit}/>
    </div>
  )
}

export default Search;