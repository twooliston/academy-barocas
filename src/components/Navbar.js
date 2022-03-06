import { Link } from 'react-router-dom';

const Navbar = (props) => {
    let pages = props.pages;

    return (
        <nav className="App-header">
            <ul>
                {pages.map((page) => (
                    <li key={page[0]}><Link to={page[0]}>{page[1]}</Link></li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;