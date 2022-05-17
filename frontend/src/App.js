import Axios from 'axios'
import {useState, useEffect} from 'react'
import Header from './components/Header'
import { InputGroup, FormControl } from 'react-bootstrap';

function App() {
  const [showData, setShowData] = useState([])
  const[ name, setName] = useState("")
  const[ message, setMessage] = useState(0)

  //render first display data
  useEffect(()=>{
    Axios.get('http://localhost:3001/')
    .then(res=>{
      // console.log(res.data)
      return setShowData(res.data)
    })
  },[])
  
  //create/input new data
  const createMessage = () => {
    // console.log(name,message)
    Axios.post('http://localhost:3001/create/',
    {
      name: name,
      messages: message
    })
    .then(res=>{
      alert('message addeded')
    })
  }

  return (
    <div className="main-container">
      <Header/>
      <h2>Add Message</h2>
      <div className='input-container'>
        <div>
          <InputGroup  >
            <InputGroup.Text  id="inputGroup-sizing-default">Name</InputGroup.Text>
            <FormControl
              onChange={(e)=>setName(e.target.value)}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>

          <InputGroup >
            <InputGroup.Text id="inputGroup-sizing-default">Message</InputGroup.Text>
            <FormControl
              onChange={(e)=>setMessage(e.target.value)}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <button className='text-light bg-primary' onClick={createMessage}>Submit</button>
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