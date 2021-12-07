import {translateName} from "../../functions";
import {AnimalType, updateAnimals} from "../../store/animalSlice";
import {ButtonSubmit} from "../ButtonSubmit/ButtonSubmit";
import "./AddLang.scss";
import uniqid from "uniqid";
import {useAppDispatch} from "../../store/hooks";
import {useState} from "react";

interface Props {
    languages: string[];
    animal: AnimalType;
    index: number
}

export const AddLangCard = ({languages, animal, index}: Props) => {
    const [showSaveBtn, setShowSaveBtn] = useState(false)
    const dispatch = useAppDispatch();
    let clonedAnimal = {...animal}

    const changeAnimalProps = (value: string, lang: string) => {
        setShowSaveBtn(true);
        clonedAnimal = {...animal, name: {...animal.name, [lang]: value}}
    }

    const onSaveBtnClick = () => {
        dispatch(updateAnimals({animal: clonedAnimal, index: index}))
    }

    return (
        <form className={"langForm_wrapper"}>

            <div className={"langForm"}>
                <img src={animal.imgSrc} alt="" className={"langForm_image"}/>

                <div className={"langForm_lang_wrapper"}>
                    {languages.map((lang) => (
                        <NameInput
                            key={uniqid()}
                            title={`Language: ${lang}`}
                            value={translateName(animal, lang)}
                            onInputChange={(value) => changeAnimalProps(value, lang)}
                        />
                    ))}
                </div>
            </div>


            {
                showSaveBtn && <ButtonSubmit btnName={"Save"} onBtnClick={onSaveBtnClick}/>
            }
        </form>

    )
}


interface InputProps {
    title: string;
    value: string;
    onInputChange: (value: string) => void
}

export const NameInput = ({title, value, onInputChange}: InputProps) => {
    const [inputValue, setInputValue] = useState(value)
    return (
        <div className={"langForm_input"}>
            <h3 className={"form_input_title"}>{title}</h3>
            <input
                className={"form_input_input"}
                type="text"
                value={inputValue}
                onChange={event => {
                    event.preventDefault();
                    setInputValue(event.target.value);
                    onInputChange(event.target.value)
                }}
            />
        </div>
    )
}

