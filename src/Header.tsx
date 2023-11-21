import './header.scss'

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#skills">Compétences</a></li>
                    <li><a href="#portofolio">Portofolio</a></li>
                    <li><a href="#contact" className='btn'>Me contacter</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header