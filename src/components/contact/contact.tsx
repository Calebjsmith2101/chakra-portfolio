import { Box, Button, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text, Textarea } from '@chakra-ui/react'

const contact = () => {
  return (
    <>
    <Box as="section" pt="200px">
      <Heading as='h5' size='4xl' noOfLines={1} color="brand.100" pb='30px' pl="400px">Contact Me</Heading>
      <Box>
        <Text pb='2px' color="brand.300" pl="300px">Although I’m not currently looking for any new opportunities, my inbox is always open.</Text>
        <Text pb='20px'  color="brand.300" pl="300px">Whether you have a question or just want to say hi, I’ll try my best to get back to you!</Text>
      </Box>
    </Box>
    <Box as="section">
    <Stack spacing={4}>
  <InputGroup>
    <Input type="text" name='name' placeholder='Your Full Name' required/>
  </InputGroup>
  <InputGroup>
    <Input type="email" name='email' placeholder='Your Email' required/>
    <InputRightElement />
  </InputGroup>
  <InputGroup>
  <InputLeftElement
      pointerEvents='none'/>
  <Textarea name="message" placeholder='Your Message' required></Textarea>
  <InputRightElement />
  </InputGroup>
  <Button type="submit" bg='#42A799'>Send Message</Button>
</Stack>
        
        
     
    </Box>
    </>
  )
}

export default contact