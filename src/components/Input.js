
const Input = (props) => {
  return (
    <div>
    	<input type={props.type} className="input"
    	placeholder = {props.text}
    	value = {props.entry} onChange={(e)=>props.onChange(e)}
      defaultValue = {props.defaultValue}/>
    </div>
  )
}

export default Input;