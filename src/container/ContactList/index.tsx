import Contact from '../../component/Contact'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Contactist = () => {
  const { itens } = useSelector((state: RootReducer) => state.contacts)

  return (
    <>
      {itens.map((element, index) => (
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
