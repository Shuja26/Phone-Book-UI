import Element from './Element'


const List = ({contact, del, edit}) => {
  return (
    contact.length > 0 ? 
    <div>
    	 {contact.map((name, index) => (
    		<Element key={index}
    		name={name} del={del} edit={edit}/>
    		))}  
    </div>
    : 
    <div>
    <h2>No contacts to show</h2>
    </div>
  )
}

export default List;