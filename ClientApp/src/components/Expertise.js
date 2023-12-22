import React from 'react';
import { Container } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { CardExpertise } from './Card';
import { CodeSlash, ChatLeftDotsFill, BroadcastPin, Bookmark } from 'react-bootstrap-icons';

// Expertise componenent
const Expertise = () => {
    // Translation
    const { t: translate } = useTranslation();

    // Icons
    const iconMap = [
        <CodeSlash />,
        <ChatLeftDotsFill />,
        <BroadcastPin />,
        <Bookmark />
    ];

    return (
        <section className="expertise__section">
            <Container className="expertise__section_container">
                <h2 className="expertise__section_title">{translate("expertise.title")}</h2>
                <div className="expertise__section_group__card">
                    {translate("expertise.cards", { returnObjects: true }).map((expertise, index) => (
                        <CardExpertise
                            key={index}
                            icon={iconMap[index]}
                            title={translate(`expertise.cards.${index}.title`)}
                            text={translate(`expertise.cards.${index}.text`)}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Expertise;