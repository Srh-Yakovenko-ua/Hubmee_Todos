import React from 'react';

import { useAppSelector } from '../../../../app/store/store';
import { DeleteTodoModal } from '../../../../features/modal/delete-todo-modal/DeleteTodoModal';
import { EditTodoModal } from '../../../../features/modal/edit-todo-modal/EditTodoModal';
import { MODAL_TYPE } from '../../../../features/modal/modal-slice';
import { openTypeSelector } from '../../../selectors';

export const ModalContent = () => {
  const typeModal = useAppSelector(openTypeSelector);

  return (
    <>
      {typeModal === MODAL_TYPE.delete && <DeleteTodoModal />}
      {typeModal === MODAL_TYPE.edit && <EditTodoModal />}
    </>
  );
};
