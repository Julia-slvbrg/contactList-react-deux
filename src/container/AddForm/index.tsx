import * as S from './styles'

const AddForm = () => {
  return (
    <S.Aside>
      <S.Form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="E-mail" />
        <input type="number" placeholder="Número" />
        <S.Btn type="submit">Adicionar</S.Btn>
      </S.Form>
    </S.Aside>
  )
}

export default AddForm
