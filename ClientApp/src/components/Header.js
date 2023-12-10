import { Link } from 'react-router-dom';
import { Container, NavbarBrand } from 'reactstrap';
import { NavDesktop, NavMobile } from './Nav';
import MeerTab from "./MeerTab";


const websiteLinks = [
    { name: 'Home', path: '/' },
    { name: 'Over ons', path: '/over-ons' },
    { name: 'Expertise', path: '/expertise' },
    { name: 'Actueel', path: '/actueel' },
    { name: 'Contact', path: '/contact' },
    
];
// Header component
const Header = () => {
    return (
        <header className="site__header">
            <Container className="site__header_container" fluid>
                <NavbarBrand tag={Link} to="/">
                    <img src={require("../assets/img/brand/logo_black_text_light.png")} width="278" height="60" alt="Logo" title="Project Accessibility" />
                </NavbarBrand>
                <NavDesktop links={websiteLinks} />
                <NavMobile links={websiteLinks} />
                <MeerTab/>
            </Container>
        </header>
    );
}

export default Header;