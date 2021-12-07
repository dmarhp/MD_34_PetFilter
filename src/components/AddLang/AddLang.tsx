import "./AddLang.scss"
import {AddLangCard} from "./AddLangCard";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import uniqid from "uniqid";
import {ButtonSubmit} from "../ButtonSubmit/ButtonSubmit";
import {useState} from "react";
import {addLang} from "../../store/langListSlice";
import {validateLangName} from "../../helpFunctions";
import {Input} from "../inputs/Input";

export const AddLang = () => {
    const [inputValue, setInputValue] = useState("")
    const dispatch = useAppDispatch();
    const languages = useAppSelector(state => state.langList)
    const animals = useAppSelector(state => state.animals);

    const onAddBtnClick = () => {
        let alertMessage = "success 😎"
        if (validateLangName(inputValue)) {
            dispatch(addLang(inputValue))
        } else {
            alertMessage = "OOPS, check if language name is correct"
        }
        alert(alertMessage)
    }

    return (
        <div>
            <form className={"langForm_wrapper"}>
                <Input
                    title={"Add new language"}
                    onInputChange={value => setInputValue(value)}
                    value={inputValue}
                    validate={validateLangName}
                    message={"Language name must be 2 to 3 lowercase characters"}
                />

                <ButtonSubmit
                    btnName={"Add new language"}
                    onBtnClick={onAddBtnClick}
                />
            </form>

            {animals.map((animal, index) => (
                <AddLangCard
                    languages={languages}
                    animal={animal}
                    index={index}
                    key={uniqid()}
                />
            ))}
        </div>
    )
}



