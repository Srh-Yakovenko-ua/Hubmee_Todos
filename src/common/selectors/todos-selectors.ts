import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../app/store/store';

export const getTodosSelector = (state: RootState) => state.todos.todos;
export const selectFilterSelector = (state: RootState) => state.todos.filtered;
export const searchTodosSelector = (state: RootState) => state.todos.searchTodos;
export const currentTodoSelector = (state: RootState, todoID: string) =>
  state.todos.todos.find(todo => todo.id === todoID);

export const selectFilteredTodos = createSelector(
  getTodosSelector,
  selectFilterSelector,
  searchTodosSelector,
  (todos, filter, searchTodos) => {
    if (searchTodos.length) {
      const searchLowerCase = searchTodos.toLowerCase();

      return todos.filter(todo => {
        const todoTextLowerCase = todo.text.toLowerCase();

        if (filter === 'done') {
          return todo.checkedStatus && todoTextLowerCase.includes(searchLowerCase);
        } else {
          return todoTextLowerCase.includes(searchLowerCase);
        }
      });
    }

    switch (filter) {
      case 'done': {
        return todos.filter(todo => todo.checkedStatus);
      }
      default: {
        return todos;
      }
    }
  },
);
