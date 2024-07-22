import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Contacts'

type FilterState = {
  searchTerm?: string
  value: enums.ContactType
}

const initialState: FilterState = {
  searchTerm: '',
  value: enums.ContactType.ALL
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    },
    changeFilter: (state, action: PayloadAction<enums.ContactType>) => {
      state.value = action.payload
    }
  }
})

export const { changeSearchTerm, changeFilter } = filterSlice.actions
export default filterSlice.reducer
