import React from 'react'

import { Box } from '@mui/material'
import { Controller } from 'react-hook-form'

import { useAppDispatch } from '../../../../app/store/store'
import { addSchema, AddSchemaType } from '../../../../common/constants'
import { useGlobalForm } from '../../../../common/hooks'
import { CommonButton, Input } from '../../../../shared'
import { addTodo } from '../../todo-slice'

import { addTaskContainer, addTaskInput } from './add-task.style'

export const AddTask = () => {
  const dispatch = useAppDispatch()

  const { handleSubmit, reset, errors, control } = useGlobalForm(addSchema, { text: '' })

  const addTodoSubmit = ({ text }: AddSchemaType) => {
    if (text) {
      dispatch(addTodo(text))
      reset()
    }
  }

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit(addTodoSubmit)}>
      <Box sx={addTaskContainer}>
        <Controller
          name="text"
          control={control}
          render={({ field }) => (
            <Input
              label="Your task"
              placeholder="Write your checklist text here"
              error={!!errors?.text?.message}
              helperText={errors?.text?.message as string}
              sx={addTaskInput}
              {...field}
            />
          )}
        />

        <CommonButton
          variant="outlined"
          type="submit"
          sx={{
            width: '120px',
          }}
        >
          Add
        </CommonButton>
      </Box>
    </form>
  )
}
