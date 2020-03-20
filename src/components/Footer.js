import React from 'react'

import Async from './Async'
const Container = Async(() => import('./template/Container'))
const P = Async(() => import('./template/P'))

const Footer = () => (
  <Container>
    <P>&copy; 2018, <a href="https://identiForm.com">identiForm</a> </P>
  </Container>
)

export default Footer
