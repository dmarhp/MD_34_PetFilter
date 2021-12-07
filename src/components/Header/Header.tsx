import {Logo} from "../Logo/Logo";
import "./Header.scss"
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {setLang} from "../../store/currentLangSlice";
import {ChangeEvent} from "react";
import {Link} from "react-router-dom";
import uniqid from 'uniqid';


export const Header = () => {
    const lang = useAppSelector(state => state.lang);
    const languages = useAppSelector(state => state.langList)
    const dispatch = useAppDispatch();

    const onLangChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const newLang = event.target.value;
        if (newLang) {
            dispatch(setLang(newLang))
        }
    }

    return (
        <div className={"header_wrapper"}>
            <Logo/>

            <div className={"searchBar"}>
                <input
                    className={"disabledInput"}
                    disabled={true}
                    type="text"
                    placeholder={"Search pics..."}

                />

                <button
                    className="searchBtn"
                    onClick={() => alert("OOPS")}
                >
                    <i className="fa fa-search"/>
                </button>
            </div>

            <div className={"header_buttons"}>
                <Link
                    className={"header_link"}
                    to={"/addNew"}>
                    <i className="fas fa-camera"/> &nbsp; Upload
                </Link>

                <Link
                    className={"header_link"}
                    to={"/addLang"}>
                    <i className="fas fa-star"/> &nbsp; Add language
                </Link>

                <select
                    className={"header_select"}
                    value={lang}
                    onChange={(event) => onLangChange(event)}
                >
                    {languages.length > 0
                        ? languages.map(lang => (
                            <option key={uniqid()} value={lang}>
                                {lang.toUpperCase()}
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
            </div>
        </div>
    )
}
