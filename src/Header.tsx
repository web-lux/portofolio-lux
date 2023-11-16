import './header.scss'

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="">Compétences</a></li>
                    <li><a href="">Portofolio</a></li>
                    <li><a href="">Parcours</a></li>
                    <li><a href="" className='btn'>Me contacter</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header