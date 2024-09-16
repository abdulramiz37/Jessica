import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchApiData = createAsyncThunk('api/fetchApiData', async () => {
  const username = 'coalition';
  const password = 'skills-test';
  const encodedCredentials = btoa(`${username}:${password}`);

  const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
    method: 'GET',
    headers: {
      'Authorization': `Basic ${encodedCredentials}`
    }
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data[3]; // Assuming you want the third object
});

// Creating a slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchApiData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchApiData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default userSlice.reducer;
