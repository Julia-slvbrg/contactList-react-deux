import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import ContactClass from '../../models/Contact'
import { edit, remove } from '../../store/reducers/contacts'
import * as S from './styles'
import Username from '../../assets/icons/person_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'
import Email from '../../assets/icons/alternate_email_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'
import Tel from '../../assets/icons/call_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'
import Edit from '../../assets/icons/edit_contact_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'
import Remove from '../../assets/icons/person_remove_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'
import Save from '../../assets/icons/check_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'
import Cancel from '../../assets/icons/close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'

type Props = ContactClass

const Contact = ({
  name: ogName,
  email: ogEmail,
  phone: ogPhone,
  type,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    if (ogName.length > 0) {
      setName(ogName)
      setEmail(ogEmail)
      setPhone(ogPhone)
    }
  }, [ogName])

  function removeContact() {
    setTimeout(() => {
      dispatch(remove(id))
    }, 300)
  }

  function cancelEdit() {
    setIsEditing(false)
    setName(ogName)
    setEmail(ogEmail)
    setPhone(ogPhone)
  }

  function editContact() {
    dispatch(
      edit({
        name,
        email,
        phone,
        type,
        id
      })
    )
    setIsEditing(false)
  }

  return (
    <S.ContactCard>
      <S.InfoField>
        <img src={Username} />
        <S.Input
          disabled={!isEditing}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </S.InfoField>
      <S.InfoField>
        <img src={Email} />
        <S.Input
          disabled={!isEditing}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </S.InfoField>
      <S.InfoField>
        <img src={Tel} />
        <S.Input
          maxLength={13}
          disabled={!isEditing}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </S.InfoField>
      <span>
        {isEditing ? (
          <>
            <S.Btn onClick={() => editContact()}>
              <img src={Save} />
            </S.Btn>
            <S.Btn onClick={() => cancelEdit()}>
              <img src={Cancel} />
            </S.Btn>
          </>
        ) : (
          <>
            <S.Btn onClick={() => setIsEditing(true)}>
              <img src={Edit} />
            </S.Btn>
            <S.Btn onClick={() => removeContact()}>
              <img src={Remove} />
            </S.Btn>
          </>
        )}
      </span>
      {/* colocar uma legenda no hover desses botões. Talvez usar o useHover */}
    </S.ContactCard>
  )
}

export default Contact
