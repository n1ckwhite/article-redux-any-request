import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../api";

const initialState = {
  count: "",
  id: "",
  pending: false,
  error: "",
};

export const getCount = createAsyncThunk("getCount", async () => {
  try {
    const response = await axios.get(`${API}`);
    return response.data;
  } catch (e) {
    throw new Error("Не получить цифру").message;
  }
});

export const plusCount = createAsyncThunk("plusCount", async (id) => {
  try {
    const response = await axios.patch(`${API}/plus`, {
      id,
    });
    return response.data;
  } catch (e) {
    throw new Error("Не удалось обновить цифру").message;
  }
});

export const minusCount = createAsyncThunk("minusCount", async (id) => {
  try {
    const response = await axios.patch(`${API}/minus`, {
      id,
    });
    return response.data;
  } catch (e) {
    throw new Error("Не удалось обновить цифру").message;
  }
});
export const clearCount = createAsyncThunk("clearCount", async (id) => {
  try {
    const response = await axios.patch(`${API}/clear`, {
      id,
    });
    return response.data;
  } catch (e) {
    throw new Error("Не удалось обновить цифру").message;
  }
});

export const countSlice = createSlice({
  name: "countSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(isAnyOf(getCount.pending), (state) => {
      state.pending = true;
    }),
      builder.addMatcher(isAnyOf(getCount.fulfilled), (state, action) => {
        state.id = action.payload.id;
        state.count = action.payload.count;
        state.error = "";
        state.pending = false;
      });
    builder.addMatcher(isAnyOf(getCount.rejected), (state, action) => {
      (state.error = action.error), (state.pending = false);
    });
    builder.addMatcher(isAnyOf(plusCount.pending), (state) => {
      state.pending = true;
    }),
      builder.addMatcher(isAnyOf(plusCount.fulfilled), (state, action) => {
        state.count = action.payload.count;
        state.error = "";

        state.pending = false;
      });
    builder.addMatcher(isAnyOf(plusCount.rejected), (state, action) => {
      (state.error = action.error), (state.pending = false);
    });
    builder.addMatcher(isAnyOf(minusCount.pending), (state) => {
      state.pending = true;
    }),
      builder.addMatcher(isAnyOf(minusCount.fulfilled), (state, action) => {
        state.count = action.payload.count;
        state.error = "";

        state.pending = false;
      });
    builder.addMatcher(isAnyOf(minusCount.rejected), (state, action) => {
      (state.error = action.error), (state.pending = false);
    });
    builder.addMatcher(isAnyOf(clearCount.pending), (state) => {
      state.pending = true;
    }),
      builder.addMatcher(isAnyOf(clearCount.fulfilled), (state, action) => {
        state.count = action.payload.count;
        state.error = "";
        state.pending = false;
      });
    builder.addMatcher(isAnyOf(clearCount.rejected), (state, action) => {
      state.pending = false;
      state.error = action.error;
    });
  },
});
