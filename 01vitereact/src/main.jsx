import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'


// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit google'
// }


// const anotherElement = {
//   <a href="https://google.com" target='_blank'>Visit to google</a>
// }


const reactElement = React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'click me to visit google'
)

createRoot(document.getElementById('root')).render(
  reactElement
)
