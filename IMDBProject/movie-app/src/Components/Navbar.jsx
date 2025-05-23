import { Link } from "react-router-dom";
import Logo from "../assets/imdb-logo.png"

function Navbar() {
    return <div className="flex space-x-7 items-center">
        <Link to="/">
            <img src={Logo} className="w-[100px] py-2 pl-3"/>
        </Link>

        <Link className="text-blue-500 text-3xl font-bold" to="/">
            Movies
        </Link>

        <Link className="text-blue-500 text-3xl font-bold" to="/watchlist">
            WatchList
        </Link>

    </div>
}

export default Navbar;