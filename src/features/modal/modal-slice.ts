import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export enum MODAL_TYPE {
  'edit' = 'edit',
  'delete' = 'delete',
}

const initialState = {
  header: '',
  type: '' as MODAL_TYPE,
  todoId: '',
};

type initialStateType = typeof initialState;

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setCloseModal: (state, action: PayloadAction<initialStateType>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setOpenModal: (state, action: PayloadAction<initialStateType>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setCloseModal, setOpenModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
