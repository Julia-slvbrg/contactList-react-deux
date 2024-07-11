import Header from './container/Header'
import GlobalStyle, { Container } from './styles'
import ContactList from './container/ContactList'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <Header />
        <ContactList />
      </Container>
    </Provider>
  )
}

export default App
