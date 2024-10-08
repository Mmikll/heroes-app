import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {

    const navigate = useNavigate()

    const { name, logout } = useContext(AuthContext)

    const onLogout = ( ) =>{
        navigate('/login', {
            replace: true,
        })
        
        logout()
    }



    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Heroes😎 
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>
            {/* RIGHT SIDE OF THE NAVBAR*/}
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end" >
                <ul className="navbar-nav ml-auto">
=                   <span className="nav-item nav-link text-primary" aria-label='nameSpan'>{name}</span>

                    <button
                        className='nav-item nav-link btn'
                        onClick={onLogout}
                        aria-label='logoutBtn'
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}