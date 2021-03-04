import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/list"><li>List</li></Link>
            <Link to="/movie"><li>Movie</li></Link>
            
        </ul>

    )
}

export default Navbar;