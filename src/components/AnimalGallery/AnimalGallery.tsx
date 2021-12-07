import {Animals} from "./Animals";
import {NavButton} from "./NavButton";
import React, {useState} from "react";
import {AnimalType} from "../../store/animalSlice";
import "./AnimalGallery.scss"
import {useAppSelector} from "../../store/hooks";


const getSpecies = (animals: AnimalType[]) => {
    const spices = animals.map(({species}) => [...new Set(species)])
        .map(item => item.join(""));
    spices.unshift("all");
    return spices;
}

const filterAnimals = (animals: AnimalType[], selected: string) => (
    selected === "all"
        ? animals
        : animals.filter(animal => (
            animal.species === selected
        ))
)

export const AnimalGallery = () => {
    const animals = useAppSelector(state => state.animals);
    const [selected, setSelected] = useState("all")

    const species = getSpecies(animals);
    const filteredAnimals = filterAnimals(animals, selected);

    return (
        <div className={"gallery_wrapper"}>
            <div className={"header"}>
                <nav className={"nabBar_wrapper"}>
                    {species.map(item => (
                        <NavButton
                            key={item + "_nav"}
                            name={item}
                            toggleSelected={name => setSelected(name)}
                            isSelected={item === selected}
                        />
                    ))}
                </nav>
            </div>

            <Animals
                animals={filteredAnimals}
            />
        </div>
    )
}
