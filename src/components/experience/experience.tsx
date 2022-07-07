import { Box, HStack, Heading, Text } from '@chakra-ui/react'

import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <>
    <Box as="section" id='experience'>
    <Heading as='h1' size='4xl' noOfLines={1} color="brand.100" pb='10px' pl='500px'>Skills</Heading>
      <Box>
      <Heading as='h2' size='xl' pl='400px' pb='20px'>Frontend Development</Heading>
      <Box>
      <HStack pl='450px' pb='10px'>
      <Box pb="20px">
      <BsPatchCheckFill />
      </Box>
        <Box as="article">
          <Heading as='h3' size='lg' color="brand.100">React</Heading>
          <Text color="brand.300">Intermediate</Text>
        </Box>
        <Box pb="20px">
        <BsPatchCheckFill />
        </Box>
        <Box as="article">
          <Heading as='h3' size='lg' color="brand.100">Chakra</Heading>
          <Text color="brand.300" >Intermediate</Text>
          </Box>
          </HStack >
          <HStack pl='400px' pb='10px'>
          <Box pb="20px">
          <BsPatchCheckFill />
          </Box>
        <Box as="article">
          <Heading as='h3' size='lg' color="brand.100">Javascript</Heading>
          <Text color="brand.300">Intermediate</Text>
        </Box>
        <Box pb="20px">
        <BsPatchCheckFill />
        </Box>
        <Box as="article">
          <Heading as='h3' size='lg' color="brand.100">Typescript</Heading>
          <Text color="brand.300">Intermediate</Text>
          </Box>
          </HStack>
          <HStack pl='450px' pb='10px'>
          <Box pb="20px">
          <BsPatchCheckFill />
          </Box>
        <Box as="article">
          <Heading as='h3' size='lg'color="brand.100">HTML</Heading>
          <Text color="brand.300">Experienced</Text>
        </Box>
        <Box pb="20px">
        <BsPatchCheckFill />
        </Box>
        <Box as="article">
          <Heading as='h3' size='lg' color="brand.100">CSS</Heading>
          <Text color="brand.300">Experienced</Text>
          </Box>
          </HStack>
     
      </Box>
      </Box>
    </Box>
    </>
  )
}

export default experience