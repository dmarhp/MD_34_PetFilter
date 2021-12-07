import {useState} from "react";
import {useAppDispatch} from "../../store/hooks";
import "./AddAnimal.scss"
import {addNewAnimal} from "../../store/animalSlice";
import {Input} from "../inputs/Input";
import {Select} from "../inputs/Select";
import {functions} from "../../functions";
import {ButtonSubmit} from "../ButtonSubmit/ButtonSubmit";


export const AddAnimal = () => {
    const dispatch = useAppDispatch();
    const [name, setName] = useState("");
    const [imgSrc, setImgSrc] = useState("");
    const [species, setSpecies] = useState("");
    const [addNew, setAddNew] = useState(false);

    const onAddBtnClick = () => {
        const newAnimal = {name: {en: name}, imgSrc: imgSrc, species: species}

        if (functions(newAnimal)) {
            dispatch(addNewAnimal({name: {en: name}, imgSrc: imgSrc, species: species}));
            setName("");
            setImgSrc("");
            setSpecies("");
            setAddNew(false)
        }
    }

    return (
        <form className={"addAnimal_form"}>
            <Input
                name={"Name:"}
                value={name}
                toggleInput={(inputValue) => setName(inputValue)}
            />

            <Input
                name={"Image source:"}
                value={imgSrc}
                toggleInput={(inputValue) => setImgSrc(inputValue)}
            />

            <label>
                <div className={"form_input_species_wrapper"}>
                    <span className={"form_input_title"}>Species</span>
                    <button
                        className={"form_input_title, form_input_species-button"}
                        onClick={(event) => {
                            event.preventDefault();
                            setAddNew(!addNew);
                        }}
                    >
                        add new
                    </button>
                </div>

                {addNew
                    ? <Input
                        name={""}
                        value={species}
                        toggleInput={(inputValue) => setSpecies(inputValue)}
                    />


                    : <Select
                        value={species}
                        toggleValue={(value => setSpecies(value))}
                    />
                }
            </label>

            <ButtonSubmit
                btnName={"ADD"}
                onBtnClick={onAddBtnClick}
            />
        </form>
    )
}
