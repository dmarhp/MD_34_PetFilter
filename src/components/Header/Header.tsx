import {Logo} from "../Logo/Logo";
import "./Header.scss"
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {setLang} from "../../store/currentLangSlice";
import { ChangeEvent } from "react";
import {Link} from "react-router-dom";
import uniqid from 'uniqid';



export const Header = () => {

    const lang = useAppSelector(state => state.lang);
    const languages = useAppSelector(state=> state.langList)

    const dispatch = useAppDispatch();

    const onLangChange = (event: ChangeEvent<HTMLSelectElement>)=> {
        const newLang = event.target.value;
        if (newLang) {
            dispatch(setLang(newLang))
        }
    }


    return (
        <div className={"header_wrapper"}>

            <Logo/>

            <select
                className={"form_input_select"}
                value={lang}
                onChange={(event) => onLangChange(event)}
            >

                {languages.length>0
                    ?
                    languages.map(lang=> (
                        <option key={uniqid()} value={lang}>
                            {lang}
                        </option>
                    ))


                    : < option
                        value={"en"}
                        key={"EN"}
                    >
                        EN
                    </option>
                }

            </select>

            <Link to={"/addNew"}>
                <i className="fas fa-camera"/> upload
            </Link>

            <Link to={"/addLang"}>Add new lang</Link>
        </div>

    )
}
