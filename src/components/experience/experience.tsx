import { Box, HStack, Heading, Text } from '@chakra-ui/react'

import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <>
    <Box as="section" id='experience' pt="100px">
    <Heading as='h1' size='4xl' noOfLines={1} color="brand.100" pb='10px'  fontSize={['6xl', '6xl', '6xl']} ml={['160','', '500']} mr={['50','', '150']}>Skills</Heading>
      <Box>
      <Heading as='h2' size='xl' pb='20px' fontSize={['xl', '2xl', '4xl']} ml={['100','', '400']}>Frontend Development</Heading>
      <Box>
      <HStack  pb='10px'  ml={['120','', '450']}>
      <Box pb="20px">
      <BsPatchCheckFill />
      </Box>
        <Box as="article">
          <Heading as='h3' size='lg' color="brand.100">React</Heading>
          <Text color="brand.300"  fontSize={['0.8rem', '0.8rem', '0.8rem']}>Intermediate</Text>
        </Box>
        <Box pb="20px" pl="1rem">
        <BsPatchCheckFill />
        </Box>
        <Box as="article">
          <Heading as='h3' size='lg' color="brand.100">Chakra</Heading>
          <Text color="brand.300" fontSize={['0.8rem', '0.8rem', '0.8rem']} >Intermediate</Text>
          </Box>
          </HStack >
          <HStack pb='10px' ml={['90','', '400']}>
          <Box pb="20px">
          <BsPatchCheckFill />
          </Box>
        <Box as="article">
          <Heading as='h3' size='lg' color="brand.100">Javascript</Heading>
          <Text color="brand.300" fontSize={['0.8rem']}>Intermediate</Text>
        </Box>
        <Box pb="20px" pl="1rem">
        <BsPatchCheckFill />
        </Box>
        <Box as="article">
          <Heading as='h3' size='lg' color="brand.100">Typescript</Heading>
          <Text color="brand.300" fontSize={['0.8rem']}>Intermediate</Text>
          </Box>
          </HStack>
          <HStack pb='10px' ml={['120','', '450']}>
          <Box pb="20px">
          <BsPatchCheckFill />
          </Box>
        <Box as="article">
          <Heading as='h3' size='lg'color="brand.100">HTML</Heading>
          <Text color="brand.300" fontSize={['0.8rem']}>Experienced</Text>
        </Box>
        <Box pb="20px" pl="1rem">
        <BsPatchCheckFill />
        </Box>
        <Box as="article">
          <Heading as='h3' size='lg' color="brand.100">CSS</Heading>
          <Text color="brand.300" fontSize={['0.8rem']}>Experienced</Text>
          </Box>
          </HStack>
     
      </Box>
      </Box>
    </Box>
    </>
  )
}

export default experience