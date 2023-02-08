//https://chakra-ui.com/docs/styled-system/global-styles
import { extendTheme } from "@chakra-ui/react";

export const globalTheme = extendTheme({
  styles: {
    global: {
      'body, td': {
        background: '#312E38',
        color: '#fff',
      },
      a: {
        color: 'teal.500',
      },
    },
  },
})

export default globalTheme;