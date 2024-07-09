import React from 'react'
import * as S from './styles'

const Header = () => {
  return (
    <S.HeaderContainer>
      <div>
        <span className="material-symbols-outlined">contact_page</span>
        <S.Input type="text" placeholder="Buscar por nome" />
      </div>
      <div>
        <S.Radioinput name="priority" type="radio" id="all" defaultChecked />
        <label htmlFor="all">Todos</label>
        <S.Radioinput name="priority" type="radio" id="favorites" />
        <label htmlFor="favorites">Favoritos</label>
      </div>
    </S.HeaderContainer>
  )
}

export default Header
