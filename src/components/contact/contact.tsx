import { Box, Button, FormControl, FormHelperText, FormLabel, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text, Textarea } from '@chakra-ui/react'

import emailjs from "emailjs-com";

const contact = () => {
  
  function sendEmail (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    emailjs
    .sendForm('service_cdmn2op','template_k06ambp', e.currentTarget, 'SfLV6h8QFXVLOE07Z')
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.currentTarget.reset()
}

  return (
    <>
    <Box as="section" pt="80px" id='contact'>
      <Heading as='h5' size='4xl' noOfLines={1} color="brand.100" pb='20px' ml={['85','', '400']} >Contact Me</Heading>
      <Box>
        <Text pb='2px' color="brand.300" ml={['40','42', '320']} mr={['40','42', '250']} fontSize={['sm', 'sl', 'sl']} textAlign={['center', 'center', 'left']}>Although I’m not currently looking for any new opportunities, my inbox is always open.</Text>
        <Text pb='20px'  color="brand.300" ml={['40','42', '320']} mr={['40','42', '280']} fontSize={['sm', 'sl', 'sl']} textAlign={['center', 'center', 'left']}>Whether you have a question or just want to say hi, I’ll try my best to get back to you!</Text>
      </Box>
    </Box>
    <Box>
    <form onSubmit={sendEmail}>
    <Stack spacing={4} align="stretch" pb="100px" ml={['10','10','60']} mr={['10','10','60']}  w={[300, 400, 700]} >
    <FormControl isRequired>
    <FormLabel htmlFor='text'>Name</FormLabel>
    <Input type="text" name='name' placeholder='Your Full Name' required/>
    </FormControl>
    <FormControl isRequired>
    <FormLabel htmlFor='email'>Email address</FormLabel>
    <Input type="email" name='email' placeholder='Your Email' required/>
    </FormControl>
   <FormControl isRequired>
   <FormLabel htmlFor='text'>Message</FormLabel>
   <Textarea name="message" placeholder='Your Message' required></Textarea>
   </FormControl>
  <Button type="submit" bg='#42A799' color="brand.200"  w={[150, 150, 150]}>Send Message</Button>
</Stack>
</form>
    </Box>
    </>
  )
}

export default contact