import {AnimalType} from "../../store/animalSlice";
import "./AnimalCard.scss"
import {useAppSelector} from "../../store/hooks";
import {translateName} from "../../functions";

interface CardProps {
    animal: AnimalType
}


export const AnimalCard = ({animal}: CardProps) => {
    const {imgSrc, species} = animal;

    const lang = useAppSelector(state => state.lang)

    return (
        <div className={"card_wrapper"}>
            <div className={"card_image_wrapper"}>
                <img className={"card_image"} src={imgSrc} alt=""/>
            </div>

            <div className={"card_info"}>
                <h2 className={"card_name"}>{translateName(animal, lang)}</h2>
                <h3>{species} </h3>
            </div>
        </div>
    )
}
