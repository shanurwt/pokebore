import React from 'react'
import {Link} from 'react-router-dom';


function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to=''>Pokemon</Link>
                </li>
                <li>
                    <Link to=''>Pokeindex</Link>
                </li>
                <li>
                    <Link to=''>Merch</Link>
                </li>
                <li>
                    <Link to=''>Contact us</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
