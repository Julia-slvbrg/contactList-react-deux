import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import BackArrow from '../../assets/icons/arrow_back_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'
import { RootReducer } from '../../store'
import { changeSearchTerm, changeFilter } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/Contacts'

const Header = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const { searchTerm } = useSelector((state: RootReducer) => state.filter)

  function chooseHeader() {
    if (location.pathname === '/') {
      return (
        <S.HeaderContainer>
          <div>
            <S.ListIcon className="material-symbols-outlined">
              contact_page
            </S.ListIcon>
            <S.Input
              type="text"
              placeholder="Buscar por nome"
              value={searchTerm}
              onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
            />
          </div>
          <div>
            <S.Radioinput
              name="priority"
              type="radio"
              id="all"
              value={enums.ContactType.ALL}
              onChange={() => dispatch(changeFilter(enums.ContactType.ALL))}
              defaultChecked
            />
            <label htmlFor="all">Todos</label>
            <S.Radioinput
              name="priority"
              type="radio"
              id="favorites"
              value={enums.ContactType.FAVORITE}
              onChange={() =>
                dispatch(changeFilter(enums.ContactType.FAVORITE))
              }
            />
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
