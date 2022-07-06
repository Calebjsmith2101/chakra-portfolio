import { Box, HStack, Heading, Text } from '@chakra-ui/react'

import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <>
    <Box as="section">
    <Heading as='h5' size='4xl' noOfLines={1} color="brand.100" pb='10px' pl='500px'>Skills</Heading>
      <Box>
      <Heading as="h1" pl='400px' pb='10px'>Frontend Development</Heading>
      <Box>
      <HStack pl='450px' pb='10px'>
      <BsPatchCheckFill />
        <Box as="article">
          <Heading as="h4">React</Heading>
          <Text>Intermediate</Text>
        </Box>
        <BsPatchCheckFill />
        <Box as="article">
          <Heading as="h4">Chakra</Heading>
          <Text>Intermediate</Text>
          </Box>
          </HStack>
          <HStack pl='450px' pb='10px'>
          <BsPatchCheckFill />
        <Box as="article">
          <Heading as="h4">Javascript</Heading>
          <Text>Intermediate</Text>
        </Box>
        <BsPatchCheckFill />
        <Box as="article">
          <Heading as="h4">Typescript</Heading>
          <Text>Intermediate</Text>
          </Box>
          </HStack>
          <HStack pl='450px' pb='10px'>
          <BsPatchCheckFill />
        <Box as="article">
          <Heading as="h4">HTML</Heading>
          <Text>Experienced</Text>
        </Box>
        <BsPatchCheckFill />
        <Box as="article">
          <Heading as="h4">CSS</Heading>
          <Text>Experienced</Text>
          </Box>
          </HStack>
     
      </Box>
      </Box>
    </Box>
    </>
  )
}

export default experience