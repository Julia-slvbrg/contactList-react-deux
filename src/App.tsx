import React from 'react'
import Header from './container/Header'
import GlobalStyle, { Container } from './styles'
import ContactList from './container/ContactList'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <ContactList />
      </Container>
    </>
  )

export default App
