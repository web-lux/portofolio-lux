import './header.scss'
import { HashLink as Link } from 'react-router-hash-link'

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/#skills">Compétences</Link></li>
                    <li><Link to="/#portofolio">Portofolio</Link></li>
                    <li><Link to="/#contact" className='btn'>Me contacter</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header