import React from 'react'

import { Box } from '@mui/material'
import { Controller } from 'react-hook-form'

import { useAppDispatch, useAppSelector } from '../../../../app/store/store'
import { addSchema, AddSchemaType } from '../../../../common/constants'
import { useGlobalForm, useModalController } from '../../../../common/hooks'
import { getTodoIdSelector, currentTodoSelector } from '../../../../common/selectors'
import { Input, CommonButton } from '../../../../shared'
import { editTextTask } from '../../../todos/todo-slice'
import { buttonModalContainer, commonFullWidth, todoModalContainer } from '../../common-modal.style'

import { editButtonModal, editModalContainer } from './edit-todo-modal.style'

export const EditTodoModal = () => {
  const { closeModal } = useModalController()
  const todoId = useAppSelector(getTodoIdSelector)
  const currentTodo = useAppSelector(state => currentTodoSelector(state, todoId))
  const dispatch = useAppDispatch()

  const { errors, control, handleSubmit } = useGlobalForm(addSchema, {
    text: currentTodo?.text,
  })

  const editCurrentTodo = ({ text }: AddSchemaType) => {
    if (text) dispatch(editTextTask({ id: todoId, text }))
    closeModal()
  }

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit(editCurrentTodo)}>
      <Box
        sx={{
          ...todoModalContainer,
          ...editModalContainer,
        }}
      >
        <Controller
          name="text"
          control={control}
          render={({ field }) => (
            <Input
              label="Your task"
              placeholder="Write your checklist text here"
              error={!!errors?.text?.message}
              helperText={errors?.text?.message as string}
              sx={commonFullWidth}
              {...field}
            />
          )}
        />
        <Box
          sx={{
            ...buttonModalContainer,
            ...commonFullWidth,
          }}
        >
          <CommonButton variant="contained" type="submit" sx={editButtonModal}>
            Edit
          </CommonButton>
          <CommonButton variant="outlined" callback={closeModal} sx={editButtonModal}>
            Cancel
          </CommonButton>
        </Box>
      </Box>
    </form>
  )
}
