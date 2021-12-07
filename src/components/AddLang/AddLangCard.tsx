import {translateName, validateName} from "../../helpFunctions";
import {AnimalType, updateAnimals} from "../../store/animalSlice";
import {ButtonSubmit} from "../ButtonSubmit/ButtonSubmit";
import "./AddLang.scss";
import uniqid from "uniqid";
import {useAppDispatch} from "../../store/hooks";
import {Input} from "../inputs/Input";


interface Props {
    languages: string[];
    animal: AnimalType;
    index: number
}

export const AddLangCard = ({languages, animal, index}: Props) => {
    const dispatch = useAppDispatch();
    let clonedAnimal = {...animal}


    const changeAnimalProps = (value: string, lang: string) => {
        clonedAnimal = {...animal, name: {...animal.name, [lang]: value}}
    }

    const validateForm = () => (
        Object.values(clonedAnimal.name).every(item => validateName(item))
    )


    const onSaveBtnClick = () => {
        let alertMessage = "success 😎"
        if (validateForm()) {
            dispatch(updateAnimals({animal: clonedAnimal, index: index}))
        } else {
            alertMessage = "Please make sure that all fields are filled in correctly"
        }
        alert(alertMessage)

    }

    return (
        <form className={"langForm_wrapper"}>
            <div className={"langForm"}>
                <img src={animal.imgSrc} alt={animal.name.en} className={"langForm_image"}/>

                <div className={"langForm_lang_wrapper flex-col"}>
                    {languages.map((lang) => (
                        <Input
                            key={uniqid()}
                            title={`Language: ${lang}`}
                            value={translateName(animal, lang)}
                            onInputChange={(value) => changeAnimalProps(value, lang)}
                            validate={validateName}
                            message={"Animal name must be capitalized and contain at least 3 characters"}
                        />
                    ))}
                </div>
            </div>

            <ButtonSubmit
                btnName={"Save"}
                onBtnClick={onSaveBtnClick}
            />
        </form>
    )
}
