import {useAppSelector} from "../../store/hooks";
import uniqid from "uniqid";
import {getSpecies} from "../AnimalGallery/AnimalGallery";

interface SelectProps {
    value: string;
    toggleValue: (value: string) => void;
}

export const Select = ({value, toggleValue}: SelectProps) => {
    const animals = useAppSelector(state => state.animals);
    const species = getSpecies(animals);
    species.shift();

    return (
        <select
            className={"form_input_select"}
            value={value}
            onChange={(event) => toggleValue(event.target.value)}
        >
            {species.map(item => (
                <option
                    value={item}
                    key={uniqid()}
                >
                    {item}
                </option>
            ))}
        </select>
    )
}
