import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

export type FilteredType = 'all' | 'done';
export type Todo = {
  id: string;
  text: string;
  checkedStatus: boolean;
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [] as Todo[],
    filtered: 'all' as FilteredType,
    searchTodos: '',
  },
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.todos.unshift(action.payload);
      },
      prepare: (text: string) => {
        const id = nanoid();
        const checked = false;

        return { payload: { id, text, checkedStatus: checked } };
      },
    },
    changeStatus: (state, action: PayloadAction<{ status: boolean; todoId: string }>) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload.todoId);
      const currentTodo = state.todos[index];

      if (index !== -1) {
        currentTodo.checkedStatus = action.payload.status;
        if (currentTodo.checkedStatus) {
          state.todos.splice(index, 1);
          state.todos.push(currentTodo);
        } else {
          state.todos.splice(index, 1);
          state.todos.unshift(currentTodo);
        }
      }
    },
    deleteTodo: (state, action: PayloadAction<{ todoId: string }>) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload.todoId);

      if (index !== -1) state.todos.splice(index, 1);
    },
    changeFilterTodos: (state, action: PayloadAction<FilteredType>) => {
      if (action.payload === 'all') state.searchTodos = '';

      state.filtered = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.searchTodos = action.payload;
    },
    editTextTask: (state, action: PayloadAction<Omit<Todo, 'checkedStatus'>>) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload.id);
      const currentTodo = state.todos[index];

      if (index !== -1) currentTodo.text = action.payload.text;
    },
  },
});

export const todosReducer = todosSlice.reducer;
export const { addTodo, changeStatus, deleteTodo, changeFilterTodos, setSearch, editTextTask } = todosSlice.actions;
