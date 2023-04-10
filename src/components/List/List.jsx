import { SimpleGrid } from '@chakra-ui/react'
import Character from '../Character/Character'
import { useEffect, useState } from "react"
import axios from "axios"

const List = ({ data, setData}) => {
  const [deleteId, setDeleteId] = useState('')

    useEffect(()=>{
         axios.delete(`https://6434178b1c5ed06c958eea0e.mockapi.io/users/${deleteId}`) 
      .then(({data})=>{setData(data)})
    },[ data])
   return(
<SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
 { data.map((item)=> (<Character key={item.id} setDeleteId={setDeleteId} item={item}/>
 )
  )  
}

</SimpleGrid>
  )
}

export default List
