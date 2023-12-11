import React from 'react';
import { Container } from 'reactstrap';
import { NavFooterMenu, NavFooterBottombar } from './Nav';


const snelNaarLinks = [
    { name: 'Home', path: '/' },
    { name: 'Over ons', path: '/over-ons' },
    { name: 'Expertise', path: '/expertise' },
    { name: 'Actueel', path: '/actueel' },
    { name: 'Contact', path: '/contact' },
];

const expertiseLinks = [
    { name: 'Lorem ipsum', path: '/' },
    { name: 'Lorem ipsum', path: '/' },
    { name: 'Lorem ipsum', path: '/' },
];

const toolsLinks = [
    { name: 'Lorem ipsum', path: '/' },
    { name: 'Lorem ipsum', path: '/' },
    { name: 'Lorem ipsum', path: '/' },
    { name: 'Lorem ipsum', path: '/' },
]

const generalLinks = [
    { name: 'Sitemap', path: '/sitemap' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Cookies', path: '/cookies' },
];

function FooterCopy({ title }) {
    return (
        <span className="site__footer_copyright">
            &copy; {new Date().getFullYear()} {title}
        </span>
    );
}


// Footer component
const Footer = () => {
    return (
        <footer className="site__footer">
            <Container className="site__footer_container">
                <div className="site__footer_menu">
                    <div className="site__footer_menu__logo">
                        <img src={require("../assets/img/brand/logo.png")} width="124.5" height="150" alt="Logo" title="Project Accessibility" />
                    </div>
                    <div className="site__footer_menu__column">
                        <NavFooterMenu title="Snel naar" links={snelNaarLinks} />
                    </div>
                    <div className="site__footer_menu__column">
                        <NavFooterMenu title="Expertise" links={expertiseLinks} />
                    </div>
                    <div className="site__footer_menu__column">
                        <NavFooterMenu title="Tools" links={toolsLinks} />
                    </div>
                </div>
            </Container>
            <Container className="site__footer_container">
                <div className="site__footer_bottombar border-top">
                    <FooterCopy title="Stichting Accessibility" />
                    <NavFooterBottombar links={generalLinks} />
                </div>
            </Container>
        </footer>
    );
}

export default Footer;