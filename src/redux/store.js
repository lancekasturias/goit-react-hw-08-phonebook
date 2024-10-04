import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filter/slice';
import { contactsSlice } from './contacts/slice';
import { authReducer } from './auth/slice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// const authPersistConfig = {
//     key: 'auth', 
//     storage,
//     whitelist: ['token']
// } 

export const store = configureStore({
    reducer: {
        auth: authReducer,
        filter: filterSlice.reducer,
        contacts: contactsSlice.reducer,        
    },
    middleware (getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
    },
})

export const persistor = persistStore(store);