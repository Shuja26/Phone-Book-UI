// 
import { useEffect, useState } from 'react';

const Bored = (props) => {
  const [firstLoad, setFirstLoad] = useState(1)
  const [activity, setActivity] = useState('')
  useEffect(() => {
  const refresh_counter = setInterval( () => {
    setFirstLoad(0)
    fetch("http://www.boredapi.com/api/activity/")
  .then((response) => response.json())
  .then(response => {setActivity(response['activity'])})}, firstLoad === 1 ? 1: 10000);
  return () => {clearInterval(refresh_counter);}
})

  return (
    <div>Bored? {activity}</div>
  )
}

export default Bored;
