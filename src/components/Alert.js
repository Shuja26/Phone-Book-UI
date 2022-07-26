import { useState,useEffect } from 'react';

const Alert = (props) => {

	const { status, text, visiblity } = props.toast;
	const[visiblityState, setVisiblity] = useState(visiblity);

    useEffect(() => {
      setVisiblity(visiblity)
    },[props.toast]);

     useEffect(() => {
        const timeout = setTimeout(() => {
            disappear()
        }, 1500);
        
        return () => {
            clearInterval(timeout);
        }
    }, [visiblityState]);

	const disappear = () => {setVisiblity(false);}

  return (
  	(visiblityState===true)?
  	<div className={status}>
    {text} </div>
    :
    	<div></div>

  )
}

export default Alert;