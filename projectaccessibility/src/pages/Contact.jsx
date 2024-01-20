import React, {useRef} from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Shape from "../components/Shape";
import email from "@emailjs/browser";

// Contact page
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        email.sendForm('service_68oa24s', 'template_uozhqo4', form.current, 'j66DndMWEXdUxfS1a')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    // Translation
    const { t: translate } = useTranslation("contact");

    return (
        <>
             <Header />
            <div className="contact__page">
                <div className="contact__page_banner">
                    <Shape section="contact" position={["left", "right"]} />
                </div>
                <Container className="about__page_container">
                    <section className="contact__section" id="contact">
                        <Container className="contact__section_container">
                            <div className="contact__section_wrapper">
                                <div className="contact__section_content">
                                    <br></br>
                                    <h1>{translate("ContactTitle")}</h1>
                                    <p className="contact__section_content__text">{translate("content")}</p>

                                    <p className="contact__section_contact_infotext">
                                        <MdEmail /> {translate("contact.email")}
                                    </p>
                                    <p className="contact__section_contact_infotext">
                                        <MdPhone /> {translate("contact.phone")}
                                    </p>
                                    <p className="contact__section_contact_infotext">
                                        <MdLocationOn /> {translate("contact.address")}
                                    </p>
                                    <div className="StyledContactForm">
                                    <form ref = {form} onSubmit={sendEmail}>
                                      <label>Name</label>
                                      <input type="text" name="user_name"/>  
                                      <label>Email</label>
                                      <input type="email" name="user_email" />
                                      <label>Message</label>
                                      <textarea name="message" />
                                      <input type="submit" value="Send" />
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </section>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
