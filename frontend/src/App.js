import Axios from 'axios'
import {useState, useEffect} from 'react'
import Header from './components/Header'
import { InputGroup, FormControl } from 'react-bootstrap';

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
      <Header/>

      <div className='input-container'>
        <div>
        <h2>Add Message</h2>
          <InputGroup  >
            <InputGroup.Text  id="inputGroup-sizing-default">Name</InputGroup.Text>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>

          <InputGroup >
            <InputGroup.Text id="inputGroup-sizing-default">Message</InputGroup.Text>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <button className='text-light bg-dark'>Submit</button>
        </div>
      </div>

      <div>
        <h1>Message List</h1>
      </div>

      {showData.map((data,i)=>{
        return(
          <div className='messageboard-container' key={i}>
            <h4># {i}</h4>
            <h4>Name: {data.name}</h4>
            <h4>Message: {data.message}</h4>
          </div>
        )
      })}
    </div>
  );
}

export default App;