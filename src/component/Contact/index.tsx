import React from 'react'
import * as S from './styles'
import Username from '../../assets/icons/person_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'
import Email from '../../assets/icons/alternate_email_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'
import Tel from '../../assets/icons/call_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'
import Edit from '../../assets/icons/edit_contact_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'
import Remove from '../../assets/icons/person_remove_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'

const Contact = () => {
  return (
    <S.ContactCard>
      <span>
        <img src={Username} />
        <p>Fulano</p>
      </span>
      <span>
        <img src={Email} />
        <p>email@email.com</p>
      </span>
      <span>
        <img src={Tel} />
        <p>(00) 9 1234-5678</p>
      </span>
      <div>
        <S.Btn>
          <img src={Edit} />
        </S.Btn>{' '}
        {/* colocar uma legenda no hover desses botões. Talvez user o useHover */}
        <S.Btn>
          <img src={Remove} />
        </S.Btn>
      </div>
    </S.ContactCard>
  )
}

export default Contact
