import "./Logo.scss"
import {Link} from "react-router-dom";

export const Logo = () =>{


    return(

        <Link
            className={"logo_wrapper"}
            to={"./"}
        >
            <h1 className={"logo"}>Pet</h1>
            <h1 className={"logo logo-hub"}>hub</h1>
        </Link>
    )
}
