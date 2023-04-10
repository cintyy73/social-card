
import { Stack } from "@chakra-ui/react"
import List from "./components/List/List"
import { useEffect, useState } from "react"
import axios from "axios"
 


function App() {
  const [data, setData] = useState([])
    useEffect(()=>{
      axios.get('https://6434178b1c5ed06c958eea0e.mockapi.io/users')
      .then(({data})=>{setData(data)
    })   
  },[])
  
  return (
  <Stack>
    <List data={data} />
  </Stack>
  )
}

export default App
