import {createSlice} from '@reduxjs/toolkit';

type TPaginationState = {
  currentPage: number;
  totalCount: number;
};

const initialState: TPaginationState = {
  currentPage: 1,
  totalCount: 1,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const {setCurrentPage} = paginationSlice.actions;

export default paginationSlice.reducer;
