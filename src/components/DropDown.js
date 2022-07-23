import {useState} from 'react';
import Select from 'react-select';

const options = [
  { value: 'search', label: 'Search' },
  { value: 'prefix', label: 'Prefix Search' }
]

const DropDown = ({type}) => {
  const [value, setValue] = useState('');

  const sendSelectedValue = (e)=>{
    type(e.value)
  }

  return (
    <div className="dropdown">
    <Select options={options} onChange={(e)=>{sendSelectedValue(e)}}/>
    </div>
  )
}

export default DropDown;