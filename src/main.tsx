import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'

import * as React from 'react'

import App from './App'
import {ChakraProvider} from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    brand: {
      100: '#CCD6F6',
      200: '#1F1F38',
      300: '#6B728F'   
    },
  },
  styles: {
    global: {
      body: {
        bg: '#1F1F38',
        color: '#42A799',
      },
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
        fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  radii: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
      },
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>
)
