import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {api} from "../app/services/api";
import auth from "../features/auth/authSlice"

export const store = configureStore({
    reducer: {
        [api.reducerPath]:api.reducer,
        auth,

    },
    middleware:(getDefaultMiddleware)=>{
       return getDefaultMiddleware().concat(api.middleware)
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
