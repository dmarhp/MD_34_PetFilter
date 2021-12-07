import {AnimalType} from "./store/animalSlice";

export const functions = (animal: { name: { en: string; }; imgSrc: string; species: string; }) => {
    if (!/[a-z]/.test(animal.species)) {
        alert("species not valid")
        return false;
    }

    try {
        const url = new URL(animal.imgSrc);
    } catch (_) {
        alert("URL fail")
        return false;
    }

    return true;
}


export const translateName = (animal: AnimalType, lang: string) => {

    const langOptions = Object.entries(animal.name)


    let translatedName = "";
    langOptions.forEach(item => {
        if (item[0] === lang) {
            translatedName = item[1]
        }
    })

    return translatedName;
}
