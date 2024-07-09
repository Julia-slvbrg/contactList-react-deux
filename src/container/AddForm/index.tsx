import React from 'react'

const AddForm = () => {
  return (
    <aside>
      <h2>Adicione um novo contato</h2>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="E-mail" />
        <input type="number" placeholder="Número" />
        <button type="submit">Adicionar</button>
      </form>
    </aside>
  )
}

export default AddForm
