import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'

import { Box, Heading, Image, Link, Text } from '@chakra-ui/react'

const header = () => {
  return (
    <Box as='section' pt='35px' pb='198px' textAlign='center' position='relative'>
    <Text as='h5' size='sm'>Hello I'm</Text>
    <Heading as='h1' size='4xl' noOfLines={1} color="brand.100" pt='5px'>Caleb Smith</Heading>
    <Text as='h5' size='sm' pt='10px'>I build things for the web.</Text>
    <Box boxSize='sm'>
    <Image src='https://calebjsmith.netlify.app/static/media/Caleb.be3e2bd5ff36ecb2b793.jpg' 
           alt='Caleb Smith' 
           position='absolute' 
           borderRadius='50%'
           width="17rem"
           left='calc(50% - 9rem)'
           padding='1.5rem'
            />
            
    </Box> 
    <Box >
    <Link href="#contact">Scroll to bottom</Link>
    </Box>
    </Box>
    
  )
}

export default header