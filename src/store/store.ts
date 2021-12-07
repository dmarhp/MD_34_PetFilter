import { configureStore } from '@reduxjs/toolkit'
import animalReducer from "./animalSlice";
import langReducer from "./currentLangSlice"
import langListReducer from "./langListSlice"
import {saveState} from "./localStorage";


export const store = configureStore({
    reducer:{
        animals: animalReducer,
        lang: langReducer,
        langList: langListReducer


    }
})

store.subscribe(() => {
    saveState({
        animals: store.getState().animals
    });
});



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
