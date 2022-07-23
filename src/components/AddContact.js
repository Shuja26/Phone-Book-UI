import {useState} from 'react'
import Button from './Button'
import Input from './Input'


const AddContact = ({add, form}) => {
  const[text, setText] = useState('')
  const[number, setNumber] = useState('')

  function nameFieldOnChange(e){
    setText(e.target.value)
  }

   function numberFieldOnChange(e){
    setNumber(e.target.value)
  }

  const onSubmit = (e)=>{
    console.log(e)
  	e.preventDefault()
  	if(!text) {
  		alert('Please enter a name')
  		return
  	}
      let isnum = /^\d{10}/.test(number)
      if(!isnum)
      {
        alert('Please enter a 10 digit number')
        return 
      }

  	add(text, number)
  	setText('')
  	setNumber('')
  	form()
    return
  }

  return (
    <div className='form-control'>
    	<div>
    		<label>Name</label>
        <Input text ={'Name of contact'} value = {text} onChange={nameFieldOnChange} type={'text'}/>
    	</div>
    	<div>
    		<label>Number</label>
        <Input text ={'Contact number'} value = {number} onChange={numberFieldOnChange}  type={'text'}/>
    	</div>
      <Button text='Save' form={onSubmit}/>
    </div>
  )
}

export default AddContact;