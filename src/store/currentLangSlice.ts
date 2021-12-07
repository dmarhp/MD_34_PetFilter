import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export type SpeciesType = string[]


export const initialState = "en"

export const currentLangSlice = createSlice({
    name: "langList", initialState,
    reducers: {
        setLang: (state: string, action: PayloadAction<string>) => {
            return action.payload
        }
    }
})

export const {setLang} = currentLangSlice.actions
export default currentLangSlice.reducer
