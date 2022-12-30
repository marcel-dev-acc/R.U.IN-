import { configureStore } from '@reduxjs/toolkit'
import authList from './auth/reducer';

export const authStore = configureStore({ reducer: authList });