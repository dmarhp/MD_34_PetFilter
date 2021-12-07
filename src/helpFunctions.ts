import {AnimalType} from "./store/animalSlice";


export const validateName = (name: string) => {
    const trimmedName = name.trim();
    if (trimmedName.length < 3) {
        return false
    } else if (name.match(/^[A-Z][^A-Z]/)) {
        return true;
    } else if (name.match(/^[А-Я][^А-Я]/)) {
        return true;
    }
    return false
}

export const validateLangName = (langName: string) => {
    const length = langName.length
    if (length < 2 || length > 3) {
        return false;
    } else return langName === langName.toLowerCase();
}

export const validateImgSrc = (imgSrc: string) => {
    try {
        const url = new URL(imgSrc);
    } catch (_) {
        return false;
    }
    return true;
}

export const validateAnimal = (animal: { name: { en: string; }; imgSrc: string; species: string; }) => {
    if (!validateName(animal.name.en)) {
        return false;
    } else if (!validateImgSrc(animal.imgSrc)) {
        return false;
    } else return validateName(animal.species);
}

export const translateName = (animal: AnimalType, lang: string) => {
    const langOptions = Object.entries(animal.name);
    let translatedName = "";

    langOptions.forEach(item => {
        if (item[0] === lang) {
            translatedName = item[1]
        }
    })
    return translatedName;
}
