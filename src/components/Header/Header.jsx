import { Button, ButtonGroup, Center, HStack, Image, VStack } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <VStack>
        <Center>
            <Image src='src/assets/portada.jpg'/>

           
        </Center>
        <Center>
            <Image src= 'src/assets/logo.png'/>

          
        </Center>
        <HStack>
            <ButtonGroup>
                <Button backgroundImage='src/assets/temporada-1.jpg'></Button>
                <Button backgroundImage='src/assets/temporada-2.jpg'></Button>
                <Button backgroundImage='src/assets/temporada-3.jpg'></Button>
                <Button backgroundImage='src/assets/temporada-4.jpg'></Button>
                <Button backgroundImage='src/assets/temporada-5.jpg'></Button>

            </ButtonGroup>

        </HStack>

    </VStack>
  )
}

export default Header
