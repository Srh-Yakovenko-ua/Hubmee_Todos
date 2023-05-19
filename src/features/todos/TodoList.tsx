import React, { useCallback } from 'react';

import { Box, Typography } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../app/store/store';
import { searchTodosSelector, selectFilteredTodos } from '../../common/selectors';

import { AddTask } from './components/add-task/AddTask';
import { FilteredAndSearch } from './components/filtered-and-search/FilteredAndSearch';
import { TodoItem } from './components/todo-item/TodoItem';
import { changeStatus } from './todo-slice';

export const TodoList = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectFilteredTodos);
  const searchValue = useAppSelector(searchTodosSelector);

  const toggleCheckedStatus = useCallback(
    (status: boolean, todoId: string) => dispatch(changeStatus({ status, todoId })),
    [],
  );

  const todoItemLayout =
    todos && todos.length ? (
      todos.map(todo => {
        return <TodoItem key={todo.id} {...todo} changeStatusTask={toggleCheckedStatus} />;
      })
    ) : (
      <Typography component="span">
        {!!searchValue && !todos.length ? 'Task not Found' : 'Task List is empty'}
      </Typography>
    );

  return (
    <>
      <FilteredAndSearch />
      <Box sx={{ padding: '16px 0' }}>{todoItemLayout}</Box>
      <AddTask />
    </>
  );
};
