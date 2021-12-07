import {AnimalCard} from "../AnimalCard/AnimalCard";
import React from "react";
import {AnimalType} from "../../store/animalSlice";


export interface AnimalProps {
    animals: AnimalType[]
}

export const Animals = ({animals}: AnimalProps) => {

    if (animals.length === 0) {
        return (
            <h1>No animals added yet</h1>
        )
    }

    return (
        <div className={"animals"}>
            {animals.map(animal => (
                <AnimalCard
                    key={animal.name.en + "_card"}
                    animal={animal}
                />
            ))}

        </div>
    )

}
