import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/Contacts'
import Contact from '../../models/Contact'
import { add } from '../../store/reducers/contacts'
import { useNavigate } from 'react-router-dom'

const AddForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [type, setType] = useState(enums.ContactType.ALL)

  const addContact = (event: FormEvent) => {
    event.preventDefault()
    const newContact = new Contact(
      name,
      email,
      number,
      enums.ContactType.ALL,
      1
    )

    const newContactObj = {...newContact}

    dispatch(add(newContactObj))
    navigate('/')
  }

  return (
    <S.Aside>
      <S.Form onSubmit={addContact}>
        <S.textInput
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <S.textInput
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <S.textInput
          type="number"
          placeholder="Número"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <S.TypeBox>
          <p>Tipo de contato:</p>
          {Object.values(enums.ContactType).map((type, index) => (
            <div key={index}>
              <input
                value={type}
                name="type"
                type="radio"
                id={type}
                defaultChecked={type === enums.ContactType.ALL}
                onChange={(e) => setType(e.target.value as enums.ContactType)}
              />{' '}
              <label htmlFor={type}>{type}</label>
            </div>
          ))}
        </S.TypeBox>
        <S.Btn type="submit">Adicionar</S.Btn>
      </S.Form>
    </S.Aside>
  )
}

export default AddForm
