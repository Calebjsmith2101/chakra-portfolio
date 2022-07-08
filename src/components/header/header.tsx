import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'

import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

const header = () => {
  return (
    
    <Box as='section' pt='35px' pb='198px' position='relative' textAlign={['center', 'center', 'center']}>
    <Text as='h5' size='sm' fontSize={['lg', 'lg', 'sl']}>Hello I'm</Text>
    <Heading as='h1' noOfLines={1} color="brand.100" pt='5px' fontSize={['lg', '5xl', '6xl']}>Caleb Smith</Heading>
    <Text as='h5' size='sm' pt='10px' fontSize={['lg', 'lg', 'sl']}>I build things for the web.</Text>
    <Box boxSize='sm'>
    <Image src='https://calebjsmith.netlify.app/static/media/Caleb.be3e2bd5ff36ecb2b793.jpg' 
           alt='Caleb Smith' 
           position='absolute' 
           borderRadius='50%'
           width="17rem"
           left='calc(50% - 9rem)'
           padding='1.5rem'
           ml={4}
            />
            
    </Box> 
    </Box>
   
    
  )
}

export default header