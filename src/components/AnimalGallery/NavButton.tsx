import "./AnimalGallery.scss"


interface ButtonProps {
    name: string;
    isSelected: boolean;
    toggleSelected: (name: string) => void
}

export const NavButton = ({name, isSelected, toggleSelected}: ButtonProps) => {
    return (
        <button
            className={`nabBar_button${isSelected ? " active" : ""}`}
            onClick={() => toggleSelected(name)}
        >
            {name}
        </button>
    )
}
