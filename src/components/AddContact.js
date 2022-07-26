import {useState} from 'react'
import Button from './Button'
import Input from './Input'
import Alert from './Alert'


const AddContact = ({add, form,name, ph_number, id}) => {
  const[text, setText] = useState(name)
  const[number, setNumber] = useState(ph_number)
   const[toast_options, setToast] = useState([])

    const showToast = (text,status) => {
    setToast({status:status, text:text, visiblity:true});
  }


  function nameFieldOnChange(e){
    setText(e.target.value)
  }

   function numberFieldOnChange(e){
    setNumber(e.target.value)
  }

  const onSubmit = (e)=>{
  	e.preventDefault()
  	if(!text) {
  		showToast('Please enter a name','failure')
  		return
  	}
      let isnum = /^\d{10}/.test(number)
      if(!isnum)
      {
        showToast('Please enter a 10 digit number','failure')
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
     <Alert toast={toast_options}/>
    	<div>
    		<label>Name</label>
        <Input text ={'Name of contact'} value = {text} onChange={nameFieldOnChange} type={'text'} defaultValue={name}/>
    	</div>
    	<div>
    		<label>Number</label>
        <Input text ={'Contact number'} value = {number} onChange={numberFieldOnChange}  type={'text'} defaultValue={ph_number}/>
    	</div>
      <Button text='Save' form={onSubmit}/>
    </div>
  )
}

export default AddContact;