import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type TodoType = {
  id: string | null;
  text: string | null;
  completed: boolean;
};

const initialState: Array<TodoType> = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded(state, {payload}: PayloadAction<TodoType>) {
      state.push(payload);
    },
    todoToggled(state, {payload}: PayloadAction<string>) {
      const todo = state.find(item => item.id === payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const {todoAdded, todoToggled} = todosSlice.actions ?? {};
export default todosSlice;
