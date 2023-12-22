import React from 'react';
import { Container } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { ButtonContact } from './Button';

// Contact component
const Contact = () => {
    // Translation
    const { t: translate } = useTranslation();

    return (
        <section className="contact__section">
            <Container className="contact__section_container">
                <div className="contact__section_wrapper">
                    <div className="contact__section_content">
                        <h2 className="contact__section_content__title">{translate("contact.title")}</h2>
                        <p className="contact__section_content__text">{translate("contact.description")}</p>
                        <div className="contact__section_content_button">
                            <ButtonContact style="signup" path="/" text={translate("contact.buttons.signup")} />
                            <ButtonContact style="login" path="/" text={translate("contact.buttons.signin")} />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Contact;