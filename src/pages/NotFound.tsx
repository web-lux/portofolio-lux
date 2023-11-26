import { Link } from "react-router-dom";
import "./NotFound.scss"

function NotFound() {
    return (
        <div id="notFound">
            <h1>404</h1>
            <p>La page demandée n'existe pas. <Link to="/">Retourner à l'accueil ?</Link></p>
        </div>);
}

export default NotFound;
