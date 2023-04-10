import { Card, CardFooter, Button, CardBody, Stack, Heading, Badge, Text, Image } from '@chakra-ui/react'
import React from 'react'

const Character = ({item, setDeleteId}) => {
    const {name, id, bestFriends, image, onLine} = item
  return (
    <Card maxW='sm' >
    <CardBody>
      <Image
        src={image}
        alt='avatar'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{name}</Heading>
        <Badge w='20%' textAlign='center' fontSize={6} variant='outline' colorScheme={onLine?'green':'red'}> {onLine?'On-Line': 'Off'}</Badge>
        <Text>
          Best Friends: {bestFriends?'yes':'ups'}  
        </Text>
      </Stack>
      </CardBody>
      <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
    
    <Button flex='1' variant='ghost' >
      Add Best Friends
    </Button>
    <Button onClick={()=>setDeleteId(id)} flex='1' variant='ghost' >
      Delete
    </Button>   
  </CardFooter>

  </Card>
  )
}

export default Character
