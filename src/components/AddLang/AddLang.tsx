import "./AddLang.scss"
import {AddLangCard, NameInput} from "./AddLangCard";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import uniqid from "uniqid";
import {ButtonSubmit} from "../ButtonSubmit/ButtonSubmit";
import {useState} from "react";
import {addLang} from "../../store/langListSlice";

export const AddLang = () => {
    const [inputValue, setInputValue] = useState("")
    const dispatch = useAppDispatch();
    const languages = useAppSelector(state => state.langList)
    const animals = useAppSelector(state => state.animals);


    return (
        <div>

            <form className={"langForm_wrapper"}>
                <NameInput title={"Add new language"} onInputChange={value => setInputValue(value) } value={inputValue}/>
                <ButtonSubmit btnName={"Add language"} onBtnClick={()=>dispatch(addLang(inputValue))}/>

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



