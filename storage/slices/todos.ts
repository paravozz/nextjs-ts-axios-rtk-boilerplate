import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {TodoItem} from "../../common/types";
import API from "../../common/api";

export interface TodoState {
  items: TodoItem[]
}

const initialState: TodoState = {
  items: [],
}

export const fetchTodos = createAsyncThunk(
  'todos/fetchList',
  async () => {
    const api = API.getInstance('simple-jwt-token');
    const response = await api.getTodos();

    return response.data;
  }
)

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      // Add todoItem to the state array
      state.items.push(...action.payload);
    })
  },
})


export default todoSlice.reducer
