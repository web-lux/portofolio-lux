import './header.scss'
import { HashLink as Link } from 'react-router-hash-link'

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/#skills" className='underline'>Compétences</Link></li>
                    <li><Link to="/#portofolio" className='underline'>Portofolio</Link></li>
                    <li><Link to="/#contact" className='btn'>Me contacter</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header