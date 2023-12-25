import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


// Primary button. To be made
const ButtonPrimary = () => {
    return (
        <></>
    );
}

// Secondary button. To be made
const ButtonSecondary = () => {
    return (
        <></>
    );
}

// Custom hero button on hero section
const ButtonHero = ({ text }) => {
    return (
        <Button className="button__hero" role="button" >
            <span className="circle" aria-hidden="true">
                <span className="icon arrow" />
            </span>
            <span className="button__hero_text">{text}</span>
        </Button>
    );
}

// Button for contact section on home
// Style can be signup or login
const ButtonContact = ({ style, path, text }) => {
    return (
        <Link className={`button__contact ${style}`} role="button" to={path}>
            {text}
        </Link>
    );
}

export { ButtonPrimary, ButtonSecondary, ButtonHero, ButtonContact };