//https://chakra-ui.com/docs/styled-system/global-styles
//https://chakra-ui.com/docs/styled-system/global-styles
// eslint-disable-next-line prettier/prettier
import { extendTheme } from '@chakra-ui/react'

export const globalTheme = extendTheme({
  fonts: {
    body: 'Roboto, BlinkMacSystemFont, -apple-system, "Segoe UI", Ubuntu, Oxygen, Cantarell, Arial, sans-serif'
  },
  styles: {
    global: {
      body: {
        background: '#312E38',
        color: '#fff'
      },
      '*': {
        background: 'transparent',
        color: '#fff !important'
      }
    }
  }
})

export default globalTheme
