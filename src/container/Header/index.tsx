import { useLocation } from 'react-router-dom'
import * as S from './styles'
import BackArrow from '../../assets/icons/arrow_back_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'

const Header = () => {
  const location = useLocation()

  function chooseHeader() {
    if (location.pathname === '/') {
      return (
        <S.HeaderContainer>
          <div>
            <S.ListIcon className="material-symbols-outlined">
              contact_page
            </S.ListIcon>
            <S.Input type="text" placeholder="Buscar por nome" />
          </div>
          <div>
            <S.Radioinput
              name="priority"
              type="radio"
              id="all"
              defaultChecked
            />
            <label htmlFor="all">Todos</label>
            <S.Radioinput name="priority" type="radio" id="favorites" />
            <label htmlFor="favorites">Favoritos</label>
          </div>
        </S.HeaderContainer>
      )
    } else {
      return (
        <S.HeaderContainer>
          <S.BackLink to="/">
            <S.LinkBox>
              <img src={BackArrow} />
              Lista de contatos
            </S.LinkBox>
          </S.BackLink>
        </S.HeaderContainer>
      )
    }
  }

  return <>{chooseHeader()}</>
}

export default Header
