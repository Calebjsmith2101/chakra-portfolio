import { Box, Link, } from '@chakra-ui/react'

import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser }  from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { BsCodeSlash } from 'react-icons/bs'

const nav = () => {
  return (
    <>
    <Box 
    display="flex" 
    flex-wrap="wrap" 
    justifyContent="center"
    position="fixed"
    bottom="1rem"
    bg="brand.200"
    p={2}
    ml={500}
    borderRadius='50'
    opacity="80%"
         
         >
      <Link href="#" padding="1rem" size="10rem"><AiOutlineHome /></Link>
      <Link href="#about" padding="1rem"><AiOutlineUser /></Link>
      <Link href="#experience" padding="1rem"><BiBook /></Link>
      <Link href="#portfolio" padding="1rem"><BsCodeSlash /></Link>
      <Link href="#contact" padding="1rem"><BiMessageSquareDetail /></Link>
    </Box>
    </>
  )
}

export default nav