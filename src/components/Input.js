
const Input = (props) => {
  return (
    <div>
    	<input type={props.type} className="input"
    	placeholder = {props.text}
    	value = {props.entry} onChange={(e)=>props.onChange(e)}/>
    </div>
  )
}

export default Input;