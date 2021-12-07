import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {languages} from "./animalSlice"


export const initialState = languages

export const currentLangSlice = createSlice({
    name: "langList", initialState,
    reducers: {
        addLang: (state: string[], action: PayloadAction<string>) => {
            if (!state.find(lang => lang === action.payload)) {
                state.push(action.payload);
            }
        }
    }
})

export const {addLang} = currentLangSlice.actions
export default currentLangSlice.reducer
