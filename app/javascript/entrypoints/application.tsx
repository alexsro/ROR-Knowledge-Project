import React from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

import globalTheme from '../styles/global'

import { Home } from '../modules/home'
import { ListUsers } from '../modules/users/'
import { ShowUsers } from '../modules/users/pages/ShowUsers/ShowUsers'

declare global {
  interface Window {
    appHomePage: () => void
    appListUsers: (IUserProps) => void
    appShowUsers: (IUserProps) => void
  }
}

function appRender(rootElement: string, Element, props = []) {
  const root = createRoot(document.getElementById(rootElement))
  root.render(
    <React.StrictMode>
      <ChakraProvider theme={globalTheme}>
        <Element data={props} />
      </ChakraProvider>
    </React.StrictMode>
  )
}

function appHomePage() {
  appRender('app_home_page', Home)
}

function appListUsers(props) {
  appRender('app_list_users', ListUsers, props)
}

function appShowUsers(props) {
  appRender('app_show_users', ShowUsers, props)
}

window.appHomePage = appHomePage
window.appListUsers = appListUsers

// const root = createRoot(document.getElementById('app_home_page'))
// root.render(<Home/>)

// To see this message, add the following to the `<head>` section in your
// views/layouts/application.html.erb
//
//    <%= vite_client_tag %>
//    <%= vite_javascript_tag 'application' %>
// console.log('Vite ⚡️ Rails')

// If using a TypeScript entrypoint file:
//     <%= vite_typescript_tag 'application' %>
//
// If you want to use .jsx or .tsx, add the extension:
//     <%= vite_javascript_tag 'application.jsx' %>

// Example: Load Rails libraries in Vite.
//
// import * as Turbo from '@hotwired/turbo'
// Turbo.start()
//
// import ActiveStorage from '@rails/activestorage'
// ActiveStorage.start()
//
// // Import all channels.
// const channels = import.meta.globEager('./**/*_channel.js')

// Example: Import a stylesheet in app/frontend/index.css
// import '~/index.css'
