import { useSelector } from 'react-redux'
import Contact from '../../component/Contact'
import { RootReducer } from '../../store'

const Contactist = () => {
  const { itens } = useSelector((state: RootReducer) => state.contacts)
  const { searchTerm, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterContacts = () => {
    let filteredContacts = itens

    if (searchTerm === undefined) return itens

    filteredContacts = filteredContacts.filter(
      (item) =>
        item.name.toLocaleLowerCase().search(searchTerm.toLocaleLowerCase()) >=
        0
    )

    if (value === 'todos') {
      return filteredContacts
    } else {
      filteredContacts = filteredContacts.filter(
        (item) => item.type === 'favoritos'
      )
    }

    return filteredContacts
  }

  const contacts = filterContacts()

  return (
    <>
      {contacts.map((element, index) => (
        <Contact
          name={element.name}
          email={element.email}
          phone={element.phone}
          type={element.type}
          id={element.id}
          key={index}
        />
      ))}
    </>
  )
}

export default Contactist
