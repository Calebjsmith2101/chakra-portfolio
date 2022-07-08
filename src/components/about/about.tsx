import { Box, Flex, Heading, Text } from '@chakra-ui/react'

const about = () => {
  return (
    <>
    
    <Box as="section" pb='198px' ml={['50','', '150']} mr={['50','', '150']} pt="100px" id='about' textAlign={['left', 'left', 'left']}>
      <Heading as='h5' noOfLines={1} color="brand.100" pb='10px' fontSize={['lg', '6xl', '6xl']}>About Me</Heading>
      <Text pb='5px' color="brand.300" fontSize={['sl', 'sl', 'lg']}>Hello! My name is Caleb and I enjoy creating things that live on the internet.
          My interest in web development started back in 2019 when I decided to try editing
          custom HTML emails — turns out hacking together a custom email taught me
          a lot about HTML & CSS!</Text>
          <Text pb='5px' color="brand.300" fontSize={['sl', 'sl', 'lg']}>Fast-forward to today, and my main focus these
            days is building accessible, inclusive products and digital experiences at 3P Learning.</Text>
            <Text color="brand.300" fontSize={['sl', 'sl', 'lg']}>Here are a few technologies I’ve been working with recently:</Text>
            <Text fontSize={['lg', 'lg', 'lg']}>Javascript | React | Chakra | Typescript</Text>
          
      
    </Box>
    
    </>
  )
}

export default about