import { Box, Button, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text, Textarea } from '@chakra-ui/react'

const contact = () => {
  return (
    <>
    <Box as="section" pt="80px" id='contact'>
      <Heading as='h5' size='4xl' noOfLines={1} color="brand.100" pb='20px' ml={['85','', '400']} >Contact Me</Heading>
      <Box>
        <Text pb='2px' color="brand.300" ml={['40','42', '320']} mr={['40','42', '250']} fontSize={['sm', 'sl', 'sl']} textAlign={['center', 'center', 'left']}>Although I’m not currently looking for any new opportunities, my inbox is always open.</Text>
        <Text pb='20px'  color="brand.300" ml={['40','42', '320']} mr={['40','42', '280']} fontSize={['sm', 'sl', 'sl']} textAlign={['center', 'center', 'left']}>Whether you have a question or just want to say hi, I’ll try my best to get back to you!</Text>
      </Box>
    </Box>
    <Box as="section" >
    <Stack spacing={4} align="stretch" pb="100px" ml={['10','10','60']} mr={['10','10','60']} display="flex" flex-wrap="wrap" justifyContent="center">
  <InputGroup w="800px">
    <Input type="text" name='name' placeholder='Your Full Name' required/>
  </InputGroup>
  <InputGroup w="800px">
    <Input type="email" name='email' placeholder='Your Email' required/>
    <InputRightElement />
  </InputGroup>
  <InputGroup w="800px">
  <InputLeftElement
      pointerEvents='none'/>
  <Textarea name="message" placeholder='Your Message' required></Textarea>
  <InputRightElement />
  </InputGroup>
  <Button type="submit" bg='#42A799' w="150px" color="brand.200" >Send Message</Button>
</Stack>
        
        
     
    </Box>
    </>
  )
}

export default contact