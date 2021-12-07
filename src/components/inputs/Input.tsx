import {useState} from "react";


interface InputProps {
    title: string;
    value: string;
    onInputChange: (value: string, isValid: boolean) => void
    validate: (name: string)=>boolean;
    message: string
}

export const Input = ({title, value, onInputChange, validate, message}: InputProps) => {
    const [inputValue, setInputValue] = useState(value);
    const [isValid, setIsValid] = useState(true)

    const onChange = (value: string) => {
        setIsValid(validate(value))
        onInputChange(value, isValid)
        setInputValue(value)
    }

    return (
        <div className={"langForm_input flex-col"}>
            <h3 className={"langForm_input-title"}>{title}</h3>
            <input
                className={`form_input_input ${isValid? "" : " form_input_error"}`}
                type="text"
                value={inputValue}
                onChange={event => {
                    event.preventDefault();
                    onChange(event.target.value);
                }}
            />
            <h3 className={"langForm_input-title langForm_error"}>
                {isValid
                    ? "\xa0"
                    : message}
            </h3>
        </div>
    )
}
