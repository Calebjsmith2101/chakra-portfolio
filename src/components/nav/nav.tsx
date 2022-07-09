import { Box, Link, } from '@chakra-ui/react'

import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser }  from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { BsCodeSlash } from 'react-icons/bs'
import {useState} from 'react'

const nav = () => {
  const [isActive, setIsActive] = useState('');

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
    left='calc(52% - 9rem)'
    borderRadius='50'
    opacity="80%"
         
         >
      <Link href="#" padding="1rem" onClick={() => setIsActive('#')} style={{color: isActive === "#" ? 'white' : ''}} ><AiOutlineHome /></Link>
      <Link href="#about" padding="1rem" onClick={() => setIsActive('#about')} style={{color: isActive === "#about" ? 'white' : ''}}><AiOutlineUser /></Link>
      <Link href="#experience" padding="1rem" onClick={() => setIsActive('#experience')} style={{color: isActive === "#experience" ? 'white' : ''}}><BiBook /></Link>
      <Link href="#portfolio" padding="1rem" onClick={() => setIsActive('#portfolio')} style={{color: isActive === "#portfolio" ? 'white' : ''}}><BsCodeSlash /></Link>
      <Link href="#contact" padding="1rem" onClick={() => setIsActive('#contact')} style={{color: isActive === "#contact" ? 'white' : ''}}><BiMessageSquareDetail /></Link>
    </Box>
    </>
  )
}

export default nav