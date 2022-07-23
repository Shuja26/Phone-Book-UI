import Button from './Button'


const Header = ({func, form}) => {
  return (
    <header className="header">
    	<h1>Phone-Book</h1>
    	{/*<Button text='Add Contact' form={form}/>
            <Button text='Display all contacts' form={func}/>*/}
    </header>
  )
}

export default Header;