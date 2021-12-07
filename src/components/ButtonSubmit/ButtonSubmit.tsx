import "./ButtonSubmit.scss"


interface Props {
    btnName: string;
    onBtnClick: () => void;
}

export const ButtonSubmit = ({btnName, onBtnClick}: Props) => {
    return (
        <button
            className={"btn_submit"}
            onClick={(event) => {
                event.preventDefault();
                onBtnClick();
            }}
        >
            {btnName}
        </button>
    )
}
