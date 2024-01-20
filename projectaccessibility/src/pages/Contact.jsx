import React, {useRef, useState} from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Shape from "../components/Shape";
import email from "@emailjs/browser";

// Contact page
const Contact = () => {
    //Email service
    const form = useRef();
    const [confirmation, setConfirmation] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        const name1 = form.current.user_name.value;
        const email1 = form.current.user_email.value;
        const message1 = form.current.message.value;

        if(!name1 || !email1 || !message1){
            setConfirmation("emptyFields");
            return;
        }
        //Data for email services
        email.sendForm('service_68oa24s', 'template_uozhqo4', form.current, 'j66DndMWEXdUxfS1a')
        .then((result) => {
            console.log(result.text);
            setConfirmation("success");

            form.current.reset();
        }, (error) => {
            console.log(error.text);
            setConfirmation("error")
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
                                    <br></br>
                                    <div className="StyledContactForm">
                                    <form ref = {form} onSubmit={sendEmail}>
                                    <label>{translate("formLabels.name")}</label>
                                      <input type="text" name="user_name"/>  
                                      <label>{translate("formLabels.email")}</label>
                                      <input type="email" name="user_email" />
                                      <label>{translate("formLabels.message")}</label>
                                      <textarea name="message" />
                                      <input type="submit" value="Send" />
                                      {confirmation === "success" && (
                                        <p className="confirmation success">{translate("StatusGood")}</p>
                                    )}

                                    {confirmation === "error" && (
                                        <p className="confirmation error">{translate("StatusBad")}</p>
                                    )}
                                    {confirmation === "emptyFields" && (
                                    <p className="confirmation error">{translate("StatusEmptyFields")}</p>
                                    )}
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
