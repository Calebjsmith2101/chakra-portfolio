import {
  Box,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList
} from '@chakra-ui/react'

import {FiGithub} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {RiLinkedinFill} from 'react-icons/ri'

const footer = () => {
  return (
    <>
    <Box as="footer" pt="40px" bg="#42A799" textAlign="center" fontSize="1.1rem" mt="2rem">
    <UnorderedList display="flex" flex-wrap="wrap" justifyContent="center" gap="2rem">
  <ListItem><Link href="#" color="brand.200">Home</Link></ListItem>
  <ListItem><Link href="#about" color="brand.200">About</Link></ListItem>
  <ListItem><Link href="#experience" color="brand.200">Skills</Link></ListItem>
  <ListItem><Link href="#portfolio" color="brand.200">Portfolio</Link></ListItem>
  <ListItem><Link href="#contact" color="brand.200">Contact</Link></ListItem>
</UnorderedList>
<Box display="flex" flex-wrap="wrap" justifyContent="center" gap="2rem" m={5}>
  <Link href="https://www.linkedin.com/in/calebjsmith2101/" target="_blank" color="brand.200"><RiLinkedinFill /></Link>
  <Link href="https://github.com/Calebjsmith2101" target="_blank" color="brand.200"><FiGithub /></Link>
  <Link href="https://twitter.com/calebjsmithio" target="_blank" color="brand.200"><IoLogoTwitter /></Link>
</Box>
<Box>
  <Text color="brand.200" pb="90px" fontSize="0.8rem">&copy; Caleb Smith. All rights reserved</Text>
</Box>
      
    </Box>
    </>
  )
}

export default footer