import { NavLink } from "react-router-dom"
import './Navbar.css';
import { useAuth } from "../store/auth";
import SearchBar from "./SearchProduct";

const Navbar = () => {
    const { isLoggedIn } = useAuth();
    console.log("login or not", isLoggedIn);
    return (
        <>
            <header>
                <div className="container_navbar">
                    <div className="logo_brand">
                        <NavLink className='navLivk' to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1724px-Apple_logo_grey.svg.png" width="40" height="40" alt="logo images not fount" /></NavLink>
                    </div>
                        <SearchBar />
                    <nav>
                        <ul>
                            <li>
                                <NavLink className='navLivk' to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className='navLivk' to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink className='navLivk' to="/contact">Contact</NavLink>
                            </li>

                            <li>
                                <NavLink className='navLivk' to="/services">Services</NavLink>
                            </li>
                            {isLoggedIn ? (
                                <li>
                                    <NavLink className="navLink" to="/logout" >Logout</NavLink>
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <NavLink className='navLivk' to="/register">Register</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className='navLivk' to="/login">Login</NavLink>
                                    </li>
                                </>
                            )
                            }
                        </ul>
                    </nav>
                </div>
            </header>

        </>
    )
}

export default Navbar;