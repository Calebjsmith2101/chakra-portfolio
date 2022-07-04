import { Box, Heading, Image, Link } from '@chakra-ui/react'

const header = () => {
  return (
    <Box as='section' pt='80px' pb='198px' textAlign='center' position='relative'>
    <Heading as='h5' size='sm' color='#CCD6F6'>Hello I'm</Heading>
    <Heading as='h1' size='4xl' noOfLines={1} color='#CCD6F6' pt='10px'>Caleb Smith</Heading>
    <Heading as='h5' size='sm' pt='10px'>I build things for the web.</Heading>
    <Box boxSize='sm' pt='10px'>
    <Image src='https://calebjsmith.netlify.app/static/media/Caleb.be3e2bd5ff36ecb2b793.jpg' 
           pt='20px' 
           alt='Caleb Smith' 
           position='absolute' 
           borderRadius='50%'
           width="17rem"
           left='calc(50% - 9rem)'
           padding='1.5rem 1.5rem 1.5rem 1.5rem'
            />
    </Box> 
    <Box>
    <Link href="#contact"
          
    
    >Scroll to bottom</Link>
    </Box>
    </Box>
  )
}

export default header