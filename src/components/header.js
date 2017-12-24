import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <Link
              to="/">
              <h1>READABLE</h1>
            </Link>
            <div className="home-link">

            </div>
        </div>
    )
}

export default Header
