import {useAppSelector} from "../../store/hooks";

interface SelectProps {
    value: string;
    toggleValue: (value: string) => void;
}

export const Select = ({value, toggleValue}: SelectProps) => {
    const species = useAppSelector(({animals}) => animals.map(({species}) => [...new Set(species)])).map(item => item.join(""));

    return (
        <select
            className={"form_input_select"}
            value={value}
            onChange={(event) => toggleValue(event.target.value)}
        >
            {species.map(item => (
                <option
                    value={item}
                    key={item + "_species"}
                >
                    {item}
                </option>
            ))}
        </select>
    )
}
