import  { FaRegTrashAlt, FaPencilAlt } from 'react-icons/fa'

const Element = (props) => {
  return (
    <div>
    	<h2 className="ele">{props.name.name}  <FaRegTrashAlt className = "icn"
    	onClick = {()=> props.del(props.name.number)} />
    	  <FaPencilAlt className="icn" onClick={()=>props.edit(props.name)}/>
    	</h2>    	
    	<h3>{props.name.number}</h3>
    </div>
  )
}

export default Element;