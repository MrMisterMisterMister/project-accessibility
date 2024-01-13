import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { CardExpertise } from "./Card";
import {
    CodeSlash,
    ChatLeftDotsFill,
    BroadcastPin,
    Bookmark
} from "react-bootstrap-icons";

// Expertise componenent
const Expertise = () => {
    // Translation
    const { t: translate } = useTranslation("expertise");

    // Icons
    const iconMap = [
        <CodeSlash key="code-slash" />,
        <ChatLeftDotsFill key="chat-left-dots" />,
        <BroadcastPin key="broadcast-pin" />,
        <Bookmark key="bookmark" />
    ];

    return (
        <section className="expertise__section" id="expertise">
            <Container className="expertise__section_container">
                <h2 className="expertise__section_title">
                    {translate("title")}
                </h2>
                <div className="expertise__section_group__card">
                    {translate("cards", { returnObjects: true }).map(
                        (expertise, index) => (
                            <CardExpertise
                                key={index}
                                icon={iconMap[index]}
                                title={translate(`cards.${index}.title`)}
                                text={translate(`cards.${index}.text`)}
                            />
                        )
                    )}
                </div>
            </Container>
        </section>
    );
};

export default Expertise;
