import { Box, Heading, Image, Link, Text } from '@chakra-ui/react'

import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <>
    <Box as="section" pb='198px' pl='200px' pr='200px'>
      <Heading as='h5' size='4xl' noOfLines={1} color="brand.100" pb='10px'>About Me</Heading>
      <Text pb='5px' color="brand.300">Hello! My name is Caleb and I enjoy creating things that live on the internet.
          My interest in web development started back in 2019 when I decided to try editing
          custom HTML emails — turns out hacking together a custom email taught me
          a lot about HTML & CSS!</Text>
          <Text pb='5px' color="brand.300">Fast-forward to today, and my main focus these
            days is building accessible, inclusive products and digital experiences at 3P Learning.</Text>
            <Text color="brand.300">Here are a few technologies I’ve been working with recently:</Text>
            <Text>Javascript | React | Chakra | Typescript</Text>
          
      
    </Box>
    </>
  )
}

export default about