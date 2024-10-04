import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authAPI from '../../services/authApi';
import { uthAPI } from 'services';

export const registration = createAsyncThunk(
    "auth/registration", 
     async (credentials, { rejectWithValue }) => {
    try {
      const response = await authAPI.registration(credentials);
      
        return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const logIn = createAsyncThunk(
    "auth/login", 
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await authAPI.logIn(credentials);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const logOut = createAsyncThunk(
    "auth/logout", 
    async (_, { rejectWithValue }) => {
    try {
      await authAPI.logOut();       
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (!token) {
      return thunkAPI.rejectWithValue("No valid token"); 
    }
    authAPI.setAuthHeader(token); 
    try {      
      const response = await uthAPI.refresh();
      return response; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
) 