import {useState} from 'react'
import '../App.css'; 
import Header from './Header'
import Bored from './Bored'
import Search from './Search'
import DropDown from './DropDown'
import AddContact from './AddContact'
import List from './List'
import ConClass from './ConClass'
import Button from './Button'


const Front = (props) => {
  // States
  const[contact, setContact] = useState([])
  const[showForm, setshowForm] = useState(false)
  const[showCon, setShowCon] = useState(false)
  const[seatype, setSeatype] = useState('')
  const[showEdit, setShowEdit] = useState('')
  const[editContact, setEditContact] = useState({})

  //Add contacts
  const addContact = (na, nu)=>{
    const obj = new ConClass(na,nu)
    console.log(obj)
    setContact([...contact, obj])
  }

  //Getting search result input as string
  const compare = (option)=>{
    if(!seatype){
      alert('Select a search type')
      return
    }
    if(!contact){
      alert('No contacts in your phonebook')
      return
    }
    if(seatype == 'S'){
      linSearch(option)
      console.log('twas S ', option)
    }
    if(seatype == 'P'){
      const len = option.length
      preSearch(option, len)
      console.log('twas p', option ,len)
    }
  }
  
  //Deleting contact
  const del = (num)=>{
    setContact(contact.filter((con)=> con.number !== num))
  }

  //Editing contact
  const edit = (obj)=>{    
      // let na = obj.name
      // let nu = obj.number
      // ConClass  = new ConClass(na, nu)
      setEditContact(obj)
      setShowEdit(!showEdit);
  }

  //Search Type
  const type = (type)=>{
    console.log('Type in func '+ type)
    if(type == "search"){
      setSeatype('S')
      return
    }
    if(type == "prefix"){
      setSeatype('P')
      return
    }
  }

  // Linear search
  const linSearch = (key)=>{
    
    if(!contact){
      alert('No contacts in your phonebook')
      return
    }
    for(let i = 0; i < contact.length; i++){
        if(contact[i].name === key){
            console.log('found')
            return
        }
    }
    console.log('Not found')
    return 
  }

  // Prefix search
  const preSearch =(pre , num)=>{
    for(let i = 0; i < contact.length; i++){
        if(contact[i].name.substring(0,num) === pre){
            console.log('found')
            return 
        }
    }
    console.log('Not found')
    return 
  }

  return (
    <div className="App">
      <Header form={()=>setshowForm(!showForm) } bool={showForm} bool={showCon} func={()=>setShowCon(!showCon)}/>
      <Button text='Add Contact' form={()=>setshowForm(!showForm)}/>
      <Button text='Display all contacts' form={()=>setShowCon(!showCon)}/>
      {showForm && <AddContact add={addContact} form={()=>setshowForm(!showForm)}/>}
      {showEdit && <AddContact add={addContact} form={()=>setshowForm(!showEdit)} name={editContact.name} ph_number={editContact.number}/>}
      {<DropDown type={type} />}
      <Search compare={compare}/>
      {showCon && <List del={del} edit={edit} contact={contact}/>}
      <Bored/>
    </div>
  );
}

export default Front;