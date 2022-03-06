import Navbar from './Navbar';

const Header = () => {

    let pages = [
        ["/", "Barocas Academy"],
        ["/football", "Football"],
        ["/basketball", "Basketball"],
        ["/handball", "Handball"],
        ["/about", "About Barocas"]
    ];

    return (
        <header>
            <Navbar pages={pages} />
        </header>
    );
}

export default Header;