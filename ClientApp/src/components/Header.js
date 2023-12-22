import { Link } from 'react-router-dom';
import { Container, NavbarBrand } from 'reactstrap';
import { NavDesktop, NavMobile, DropDownMenu } from './Nav';
import { useTranslation } from 'react-i18next';

// Header component
const Header = () => { 
    // Translation   
    const { t: translate } = useTranslation();

    // Header nav links
    const websiteLinks = [
        { name: translate("header.menu.home"), path: '/' },
        { name: translate("header.menu.about"), path: '/over-ons' },
        { name: translate("header.menu.expertise"), path: '/expertise' },
        { name: translate("header.menu.news"), path: '/actueel' },
        { name: translate("header.menu.contact"), path: '/contact' },  
    ];

    return (
        <header className="site__header">
            <Container className="site__header_container" fluid>
                <NavbarBrand tag={Link} to="/">
                    <img src={require("../assets/img/brand/logo_black_text_light.png")} width="278" height="60" alt="Logo" title="Project Accessibility" />
                </NavbarBrand>
                <NavDesktop links={websiteLinks} />
                <NavMobile links={websiteLinks} />
                <DropDownMenu/>
            </Container>
        </header>
    );
}

export default Header;