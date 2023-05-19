import React from 'react'

import { useAppSelector } from '../../../../app/store/store'
import { openTypeSelector } from '../../../../common/selectors'
import { MODAL_TYPE } from '../../modal-slice'
import { DeleteTodoModal } from '../delete-todo-modal/DeleteTodoModal'
import { EditTodoModal } from '../edit-todo-modal/EditTodoModal'

export const ModalContent = () => {
  const typeModal = useAppSelector(openTypeSelector)

  return (
    <>
      {typeModal === MODAL_TYPE.delete && <DeleteTodoModal />}
      {typeModal === MODAL_TYPE.edit && <EditTodoModal />}
    </>
  )
}
