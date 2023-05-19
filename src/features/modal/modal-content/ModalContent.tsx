import React from 'react'

import { useAppSelector } from '../../../app/store/store'
import { openTypeSelector } from '../../../common/selectors'
import { DeleteTodoModal } from '../delete-todo-modal/DeleteTodoModal'
import { EditTodoModal } from '../edit-todo-modal/EditTodoModal'
import { MODAL_TYPE } from '../modal-slice'

export const ModalContent = () => {
  const typeModal = useAppSelector(openTypeSelector)

  return (
    <>
      {typeModal === MODAL_TYPE.delete && <DeleteTodoModal />}
      {typeModal === MODAL_TYPE.edit && <EditTodoModal />}
    </>
  )
}
