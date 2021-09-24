import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {
    return (
        <nav className="main-nav">
            <Link className="main-nav__link" to={'/'}>
                #Audrey
            </Link>
            <Link className="main-nav__link" to={'/'}>
                About me
            </Link>
            <Link className="main-nav__link" to={'/'}>
                Dark mode
            </Link>
            <Link className="main-nav__link" to={'/'}>
                Switch to FR
            </Link>
        </nav>
    )
}

export default Header
