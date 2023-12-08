import React from 'react';
import { Button } from 'reactstrap';


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
        <Button role="button" className="button__hero">
            <span className="circle" aria-hidden="true">
                <span className="icon arrow" />
            </span>
            <span className="button__hero_text">{text}</span>
        </Button>
    );
}

export { ButtonPrimary, ButtonSecondary, ButtonHero };