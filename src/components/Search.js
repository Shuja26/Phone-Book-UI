import { useState } from 'react'
import Button from './Button'
import Input from './Input'
import Alert from './Alert'


const Search = ({compare}) => {
  const[entry, setEntry] = useState('')
  const[toast_options, setToast] = useState([])
    const showToast = (text,status) => {
    setToast({status:status, text:text, visiblity:true});
  }

  function textFieldOnChange(e)
{
  setEntry(e.target.value);
}


  const onSubmit = (e)=>{
  	e.preventDefault()
  	if(!entry) {
  		showToast('Please enter a name','failure')
  		return
  	}
  	compare(entry)
  	setEntry('')
  	}
  return (
    <div>
     <Alert toast={toast_options}/>
    	<div>
    		<Input text ={'Type contact name'} entry={entry}
    		value = {entry} onChange={textFieldOnChange} type={'text'}/>
    	</div>
      <Button text='Search' form={onSubmit}/>
    </div>
  )
}

export default Search;