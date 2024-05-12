import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'Peter Griffin' },
  { id: '1', name: 'Morty Smith' },
  { id: '2', name: 'Louis Litt' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
