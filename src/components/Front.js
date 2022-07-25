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
  const[showSearch, setShowSearch] = useState(false)
  const[seatype, setSeatype] = useState('')
  const[showEdit, setShowEdit] = useState('')
  const[editContact, setEditContact] = useState({})
  const[searchRes, setSearchRes] = useState([])

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
    setSearchRes([])
    setShowCon(false)
    setShowSearch(true)
    if(seatype == 'S'){
      linSearch(option)
      //console.log('twas S ', option)
    }
    if(seatype == 'P'){
      const len = option.length
      preSearch(option, len)
      //console.log('twas p', option ,len)
    }
  }
  
  //Deleting contact
  const del = (id)=>{
    setContact(contact.filter((con)=> con.id !== id))
  }

  //Editing contact
  const edit = (obj)=>{    
      setEditContact(obj)
      setShowEdit(!showEdit)
      setContact(contact.filter((con)=> con.id !== obj.id))
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
  const linSearch = (name)=>{
    
    if(!contact){
      alert('No contacts in your phonebook')
      return
    }
    
    for(let i = 0; i < contact.length; i++){
        if(contact[i].name === name){
            console.log('before')
            console.log(searchRes)
            setSearchRes([...searchRes , contact[i]])
             console.log('after '+searchRes)
        }
    }
    alert('Not found')
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
      <Button text='Display all contacts' form={()=>{
        setShowSearch(false)
        setShowCon(!showCon)}}/>
      {showForm && <AddContact add={addContact} form={()=>{
        alert('Contact Saved!')
        setshowForm(!showForm)}}/>}
        }
      {showEdit && <AddContact add={addContact} form={()=>{
        alert('Contact Saved!')
        setShowEdit(!showEdit)}} name={editContact.name} ph_number={editContact.number} id={editContact.id}/>}
      {<DropDown type={type} />}
      <Search compare={compare}/>
      {showCon && <List del={del} edit={edit} contact={contact}/>}
      {showSearch && <List del={del} edit={edit} contact={searchRes}/>}
      <Bored/>
    </div>
  );
}

export default Front;