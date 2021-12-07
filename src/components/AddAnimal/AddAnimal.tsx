import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import "./AddAnimal.scss"
import {addNewAnimal} from "../../store/animalSlice";
import {Select} from "../inputs/Select";
import {validateAnimal, validateImgSrc, validateName} from "../../helpFunctions";
import {ButtonSubmit} from "../ButtonSubmit/ButtonSubmit";
import {Input} from "../inputs/Input";
import {useNavigate} from "react-router-dom";


export const AddAnimal = () => {
    let speciesList = useAppSelector(({animals}) => animals.map(({species}) => [...new Set(species)])).map(item => item.join(""));
    speciesList = speciesList.filter(function(item, pos) {
        return speciesList.indexOf(item) == pos;
    })
    console.log(speciesList)
    const speciesInitialValue = speciesList ? speciesList[0] : "";
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const [name, setName] = useState("");
    const [imgSrc, setImgSrc] = useState("");
    const [species, setSpecies] = useState(speciesInitialValue);
    const [addNew, setAddNew] = useState(false);

    const onAddBtnClick = () => {
        let alertMessage = "success 😎";
        const newAnimal = {name: {en: name}, imgSrc: imgSrc, species: species}

        if (validateAnimal(newAnimal)) {
            setName("");
            setImgSrc("");
            setSpecies("");
            setAddNew(false);
            dispatch(addNewAnimal({name: {en: name}, imgSrc: imgSrc, species: species}));

        } else {
            alertMessage = "Please make sure that all fields are filled in correctly"
        }
        alert(alertMessage)
        navigate("../");
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

                    {
                        speciesList.length !== 0
                        && <button
                            className={"form_input_title, form_input_species-button"}
                            onClick={(event) => {
                                event.preventDefault();
                                setAddNew(!addNew);
                            }}
                        >
                            {
                                (addNew || speciesList.length === 0) ? "choose" : "add new"
                            }
                        </button>
                    }
                </div>

                {(addNew || speciesList.length === 0)
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
