import { combineReducers } from '@reduxjs/toolkit'

import { modalReducer } from '../../features/modal/modal-slice'
import { todosReducer } from '../../features/todos/todo-slice'

export const rootReducer = combineReducers({
  todos: todosReducer,
  modal: modalReducer,
})
