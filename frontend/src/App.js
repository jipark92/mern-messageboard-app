import Axios from 'axios'
import {useState, useEffect} from 'react'

function App() {

  const [showData, setShowData] = useState([])

  useEffect(()=>{
    Axios.get('http://localhost:3001/')
    .then(res=>{
      console.log(res.data)
      return setShowData(res.data)
    })
    
  },[])

  return (
    <div className="main-container">
      {showData.map((data,i)=>{
        return(
          <div key={i}>
            <p># {i}</p>
            <p>Name: {data.name}</p>
            <p>Message: {data.message}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
