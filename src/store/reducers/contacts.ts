import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'
import * as enums from '../../utils/enums/Contacts'

type ContactState = {
  itens: Contact[]
}

const initialState: ContactState = {
  itens: [
    {
      name: 'Ana Catarina',
      email: 'anacatarina@email.com',
      phone: '12 9 1234456',
      type: enums.ContactType.ALL,
      id: 1
    },
    {
      name: 'Gabo',
      email: 'gabo@email.com',
      phone: '12 9 35468941',
      type: enums.ContactType.FAVORITE,
      id: 2
    },
    {
      name: 'Maurício',
      email: 'mauricio@email.com',
      phone: '12 9 84713649',
      type: enums.ContactType.FAVORITE,
      id: 3
    },
    {
      name: 'Nildo',
      email: 'nildo@email.com',
      phone: '12 9 45791246',
      type: enums.ContactType.ALL,
      id: 4
    },
    {
      name: 'Júlia',
      email: 'julia@email.com',
      phone: '12 9 46912467',
      type: enums.ContactType.ALL,
      id: 5
    }
  ]
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contact) => contact.id !== action.payload)
      ]
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.itens.findIndex(
        (contact) => contact.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.itens[contactIndex] = action.payload
      }
    },
    changeType: (
      state,
      action: PayloadAction<{ id: number; isFavorite: boolean }>
    ) => {
      const contactIndex = state.itens.findIndex(
        (contact) => contact.id === action.payload.id
      )

      if (contactIndex >= 0) {
        action.payload.isFavorite
          ? (state.itens[contactIndex].type = enums.ContactType.FAVORITE)
          : (state.itens[contactIndex].type = enums.ContactType.ALL)
      }
    }
  }
})

export const { remove, edit, changeType } = contactSlice.actions
export default contactSlice.reducer
