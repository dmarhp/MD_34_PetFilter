import {useState} from "react";
import {useAppDispatch} from "../../store/hooks";
import "./AddAnimal.scss"
import {addNewAnimal} from "../../store/animalSlice";
import {Select} from "../inputs/Select";
import {validateAnimal, validateImgSrc, validateName} from "../../helpFunctions";
import {ButtonSubmit} from "../ButtonSubmit/ButtonSubmit";
import {Input} from "../inputs/Input";


export const AddAnimal = () => {
    const dispatch = useAppDispatch();
    const [name, setName] = useState("");
    const [imgSrc, setImgSrc] = useState("");
    const [species, setSpecies] = useState("");
    const [addNew, setAddNew] = useState(false);

    const onAddBtnClick = () => {
        let alertMessage = "success 😎";
        const newAnimal = {name: {en: name}, imgSrc: imgSrc, species: species}

        if (validateAnimal(newAnimal)) {
            dispatch(addNewAnimal({name: {en: name}, imgSrc: imgSrc, species: species}));
            setName("");
            setImgSrc("");
            setSpecies("");
            setAddNew(false)
        } else {
            alertMessage = "Please make sure that all fields are filled in correctly"
        }
        alert(alertMessage)
    }

    return (
        <form className={"addAnimal_form flex-col"}>
            <Input
                title={"Name:"}
                value={name}
                onInputChange={(value) => setName(value)}
                validate={validateName}
                message={"Animal name must be capitalized and contain at least 3 characters"}
            />

            <Input
                title={"Image source:"}
                value={imgSrc}
                onInputChange={(value) => setImgSrc(value)}
                validate={validateImgSrc}
                message={"This link is not valid!"}
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
                        {
                            addNew ? "choose" : "add new"
                        }
                    </button>
                </div>

                {addNew
                    ? <Input
                        title={""}
                        value={species}
                        onInputChange={(value => setSpecies(value))}
                        validate={validateName}
                        message={"Animal name must be capitalized and contain at least 3 characters"}
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
