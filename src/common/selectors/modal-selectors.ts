import { RootState } from '../../app/store/store';

export const openTypeSelector = (state: RootState) => state.modal.type;
export const headerModal = (state: RootState) => state.modal.header;
export const getTodoIdSelector = (state: RootState) => state.modal.todoId;
