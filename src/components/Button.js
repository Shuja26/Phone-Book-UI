const Button = ({text, form}) => {
  return (
    <button className="btn" onClick={form}>{text}</button>
  )
}

export default Button;