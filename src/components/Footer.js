import Navbar from './Navbar';

const Footer = () => {

    let pages = [
        ["/contact", "Contact"],
        ["/faqs", "FAQs"],
        ["/modern-slavery-act", "Modern Slavery Act"],
        ["/privacy-policy", "Privacy Policy"],
        ["/terms-and-conditions", "Terms & Conditions"]
    ];

    return (
        <footer>
            <Navbar pages={pages} />
        </footer>
    );
}

export default Footer;