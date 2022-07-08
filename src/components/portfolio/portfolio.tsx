import { Box, HStack, Heading, Image, Link, Text } from '@chakra-ui/react'

import IMG1 from '../../Assets/portfolio1.jpg'
import IMG2 from '../../Assets/portfolio2.jpg'
import IMG3 from '../../Assets/portfolio3.jpg'
import IMG4 from '../../Assets/portfolio4.jpg'
import IMG5 from '../../Assets/portfolio5.png'
import IMG6 from '../../Assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Birthday Reminder',
    github: 'https://github.com/Calebjsmith2101/birthday-reminder',
    demo: 'https://react-projects-1-birthday-reminder.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Our Tours',
    github: 'https://github.com/Calebjsmith2101/tours',
    demo: 'https://react-projects-2-tours.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Our Reviews',
    github: 'https://github.com/Calebjsmith2101/Our-reviews',
    demo: 'https://react-projects-3-reviews.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Accordion',
    github: 'https://github.com/Calebjsmith2101/Accordion',
    demo: 'https://react-projects-4-accordion.netlify.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Our Menu',
    github: 'https://github.com/Calebjsmith2101/our-menu',
    demo: 'https://react-projects-5-menu.netlify.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Experience',
    github: 'https://github.com/Calebjsmith2101/Experience',
    demo: 'https://react-projects-6-tabs.netlify.app/'
  },
]

const portfolio = () => {
  return (
    <>
    <Box id='portfolio' pt="130px">
      <Heading as='h1' size='4xl' noOfLines={1} color="brand.100" pl='450px' pb="50px" >Portfolio</Heading>
      <Box>
        <HStack spacing='24px' pl="210px" pb="50px">
        <Box as="article" w='250px' h='250px'>
          <Image src='https://calebjsmith.netlify.app/static/media/portfolio1.fb84f631db8ac3e84a2f.jpg' 
           alt='Birthday Reminder' borderRadius='10%'pb='10px'/>
          <Heading as='h5' size='sm' color="brand.100" pb='10px'>Birthday Reminder</Heading>
          <Link href="https://github.com/Calebjsmith2101/birthday-reminder" 
                isExternal
                display="inline-block"
                color="#42A799"
                padding="0.5rem 1rem"
                border="1px solid"
                borderRadius='xl'
                m={3}>Github</Link>
          <Link href="https://react-projects-1-birthday-reminder.netlify.app/" 
                isExternal
                display="inline-block"
                color="brand.200"
                padding="0.5rem 1rem"
                border="1px solid"
                borderRadius='xl'
                bg="#42A799">Live Demo</Link>
        </Box> 
        <Box as="article" w='250px' h='250px'>
          <Image src='https://calebjsmith.netlify.app/static/media/portfolio2.3db9dd306739c41d0410.jpg' 
           alt='Our Tours' borderRadius='10%'pb='10px'/>
          <Heading as='h5' size='sm' color="brand.100" pb='10px'>Our Tours</Heading>
          <Link href="https://github.com/Calebjsmith2101/tours" 
                isExternal
                display="inline-block"
                color="#42A799"
                padding="0.5rem 1rem"
                border="1px solid"
                borderRadius='xl'
                m={3}>Github</Link>
          <Link href="https://react-projects-2-tours.netlify.app/" 
                isExternal
                display="inline-block"
                color="brand.200"
                padding="0.5rem 1rem"
                border="1px solid"
                borderRadius='xl'
                bg="#42A799">Live Demo</Link>
        </Box> 
        <Box as="article" w='250px' h='250px'>
          <Image src='https://calebjsmith.netlify.app/static/media/portfolio3.b598132d25bcde6232f5.jpg' 
           alt='Our Reviews'borderRadius='10%'pb='10px'/>
          <Heading as='h5' size='sm' color="brand.100" pb='10px'>Our Reviews</Heading>
          <Link href="https://github.com/Calebjsmith2101/Our-reviews" 
                isExternal
                display="inline-block"
                color="#42A799"
                padding="0.5rem 1rem"
                border="1px solid"
                borderRadius='xl'
                m={3}>Github</Link>
          <Link href="https://react-projects-3-reviews.netlify.app/" 
                isExternal
                display="inline-block"
                color="brand.200"
                padding="0.5rem 1rem"
                border="1px solid"
                borderRadius='xl'
                bg="#42A799">Live Demo</Link>
        </Box> 
        </HStack>
        <HStack spacing='24px'pl="210px"  pb="50px">
        <Box as="article" w='250px' h='250px'>
          <Image src='https://calebjsmith.netlify.app/static/media/portfolio4.3fe8a5758efe96c1fb05.jpg' 
           alt='Accordion'borderRadius='10%'pb='10px'/>
          <Heading as='h5' size='sm' color="brand.100" pb='10px'>Accordion</Heading>
          <Link href="https://github.com/Calebjsmith2101/Accordion" 
                isExternal
                display="inline-block"
                color="#42A799"
                padding="0.5rem 1rem"
                border="1px solid"
                borderRadius='xl'
                m={3}>Github</Link>
          <Link href="https://react-projects-4-accordion.netlify.app/" 
                isExternal
                display="inline-block"
                color="brand.200"
                padding="0.5rem 1rem"
                border="1px solid"
                borderRadius='xl'
                bg="#42A799">Live Demo</Link>
        </Box> 
        <Box as="article" w='250px' h='250px'>
          <Image src='https://calebjsmith.netlify.app/static/media/portfolio5.ac218790479399669ac7.png' 
           alt='Our Menu'borderRadius='10%'pb='10px'/>
          <Heading as='h5' size='sm' color="brand.100" pb='10px'>Our Menu</Heading>
          <Link href="https://github.com/Calebjsmith2101/our-menu" 
                isExternal
                display="inline-block"
                color="#42A799"
                padding="0.5rem 1rem"
                border="1px solid"
                borderRadius='xl'
                m={3}>Github</Link>
          <Link href="https://react-projects-5-menu.netlify.app/" 
                isExternal
                display="inline-block"
                color="brand.200"
                padding="0.5rem 1rem"
                border="1px solid"
                borderRadius='xl'
                bg="#42A799">Live Demo</Link>
        </Box> 
        <Box as="article" w='250px' h='250px'>
          <Image src='https://calebjsmith.netlify.app/static/media/portfolio6.1168bce3da171edad5ff.jpg' 
           alt='Our Reviews'borderRadius='10%'pb='10px'/>
          <Heading as='h5' size='sm' color="brand.100" pb='10px'>Experience</Heading>
          <Link href="https://github.com/Calebjsmith2101/Experience" 
                isExternal 
                display="inline-block"
                color="#42A799"
                padding="0.5rem 1rem"
                border="1px solid"
                borderRadius='xl'
                m={3}
                
                >Github</Link>
          <Link href="https://react-projects-6-tabs.netlify.app/" 
                isExternal
                display="inline-block"
                color="brand.200"
                padding="0.5rem 1rem"
                border="1px solid"
                borderRadius='xl'
                bg="#42A799">Live Demo</Link>
        </Box> 
        </HStack>
        
      </Box>
    </Box>
    </>
  )
}

export default portfolio