import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loadState} from "./localStorage";


export type AnimalType = {
    name: { [key: string]: string },
    species: string,
    imgSrc: string;
}

const loadLocalState = loadState();
export const initialState: AnimalType[] = loadLocalState ? loadLocalState.animals : []
/*
[
{
    name: {en: "cat", ru: "kot"},
    species: "cats",
    imgSrc: "https://lifetimemix.com/wp-content/uploads/2021/06/1800x1200_cat_relaxing_on_patio_other.jpg"
},
{
    name: {en: "dog"},
    species: "dogs",
    imgSrc: "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d"
},
{
    name: {en: "fish"},
    species: "fish",
    imgSrc: "https://www.happylifeanimal.com/wp-content/uploads/2020/08/57a4db38dd089551028b465b.jpg"
},
{
    name: {en: "rat"},
    species: "rats",
    imgSrc: "https://m.media-amazon.com/images/I/61fCnJsrltL._AC_SL1000_.jpg"
}
]

 */


const languages: string[] = [];

initialState.length === 0
    ? languages.push("en")
    : initialState.forEach(({name}) => {
        Object.keys(name).forEach(nameLang => {
            if (!languages.find(lang => lang === nameLang)) {
                languages.push(nameLang);
            }
        })
    })

export const animalSlice = createSlice({
    name: "animals", initialState,
    reducers: {
        addNewAnimal: (state: AnimalType[], action: PayloadAction<AnimalType>) => {
            state.push(action.payload);
        },
        updateAnimals: (state: AnimalType[], action: PayloadAction<{ animal: AnimalType, index: number }>) => {
            state[action.payload.index] = action.payload.animal;
        }
    }
})

export const {addNewAnimal, updateAnimals} = animalSlice.actions
export default animalSlice.reducer

export {languages}
