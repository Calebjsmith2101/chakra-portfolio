import { Box, Link, } from '@chakra-ui/react'

import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser }  from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { BsCodeSlash } from 'react-icons/bs'

const nav = () => {
  return (
    <>
    <Box bg="brand.200"
         width="max-content" 
         display="block" 
         padding="0.7rem 0.7rem"
         position="fixed"
         bottom="0rem"
         >
      <Link href="#" padding="0.1rem" bg="transparent"><AiOutlineHome /></Link>
      <Link href="#about" padding="0.1rem"><AiOutlineUser /></Link>
      <Link href="#experience" padding="0.1rem"><BiBook /></Link>
      <Link href="#portfolio" padding="0.1rem"><BsCodeSlash /></Link>
      <Link href="#contact" padding="0.1rem"><BiMessageSquareDetail /></Link>
    </Box>
    </>
  )
}

export default nav