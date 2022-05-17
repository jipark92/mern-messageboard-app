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
      <h2>Add Message</h2>
      <div className='input-container'>
        <div>
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
          <button className='text-light bg-primary'>Submit</button>
        </div>
      </div>

      <div>
        <h1>Message List</h1>
      </div>

      {showData.map((data,i)=>{
        return(
          <div className='messageboard-container' key={i}>
            <h6>#{i}</h6>
            <h4>"{data.message}"</h4>
            <h6>by {data.name}</h6>
            {/* <h6>{Date()}</h6> */}
          </div>
        )
      })}
    </div>
  );
}

export default App;