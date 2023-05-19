import React from 'react';

import { Box, Typography } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../../app/store/store';
import { useModalController } from '../../../common/hooks';
import { getTodoIdSelector } from '../../../common/selectors';
import { CommonButton } from '../../../shared';
import { deleteTodo } from '../../todos/todo-slice';
import { buttonModalContainer, todoModalContainer } from '../common-modal.style';

import { deleteButton } from './delete-todo-modal.style';

export const DeleteTodoModal = () => {
  const { closeModal } = useModalController();
  const dispatch = useAppDispatch();
  const todoId = useAppSelector(getTodoIdSelector);

  const deleteTodoHandler = async () => {
    await dispatch(deleteTodo({ todoId }));
    closeModal();
  };

  return (
    <Box sx={todoModalContainer}>
      <Box>
        <Typography component="span">
          Do you really want to remove this task? <br /> Task will be deleted.
        </Typography>
      </Box>
      <Box sx={buttonModalContainer}>
        <CommonButton callback={deleteTodoHandler} color="error" sx={deleteButton}>
          Yes
        </CommonButton>
        <CommonButton callback={closeModal} variant="outlined" sx={deleteButton}>
          No
        </CommonButton>
      </Box>
    </Box>
  );
};
