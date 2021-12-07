interface InputProps {
    name: string
    value: string
    toggleInput: (inputValue: string) => void;
}

export const Input = ({name, value, toggleInput}: InputProps) => {

    return (
        <label className={"form_input_wrapper"}>
            <span className={"form_input_title"}>{name}</span>
            <input
                className={"form_input_input"}
                type="text"
                value={value}
                onChange={(event) => toggleInput(event.target.value)}
            />
        </label>

    )
}


