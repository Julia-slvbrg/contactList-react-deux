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

  let formatedNumber: string
  function formatNumber(number: string) {
    formatedNumber = `${number.slice(0, 2)} ${number.slice(2, 3)} ${number.slice(3)}`
    return formatedNumber
  }

  const addContact = (event: FormEvent) => {
    event.preventDefault()

    if (number.length !== 11)
      return alert(
        'Número de telefone inválido. Insira o DDD e número do telefone'
      )

    formatNumber(number)

    const newContact = new Contact(
      name,
      email,
      formatedNumber,
      enums.ContactType.ALL,
      1
    )

    const newContactObj = { ...newContact }

    dispatch(add(newContactObj))
    navigate('/')
  }

  return (
    <S.Aside>
      <S.Form onSubmit={addContact}>
        <S.dataInput
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <S.dataInput
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <S.dataInput
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
