import { Link } from 'react-router-dom';

const Navbar = (props) => {
    let pages = props.pages;

    return (
        <nav className="App-header">
            <ul>
                {pages.map((page) => (
                    <li key={page[0]}><Link to={page[0]}>{page[1]}</Link></li>
                ))}
                {/* <Link to="/football"><li>Football</li></Link>
                <Link to="/basketball"><li>Basketball</li></Link>
                <Link to="/handball"><li>Handball</li></Link>
                <Link to="/about"><li>About Barocas</li></Link> */}
            </ul>
        </nav>
    );
}

export default Navbar;