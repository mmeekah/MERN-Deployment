
import React from 'react'
import { Link } from '@reach/router'


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to='/' style={{ color: 'white' }}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/new' style={{ color: 'white' }}>Add</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;