import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Shape from "./Shape";
import { GroupMember } from "./Group";

// Member component
const Member = () => {
    // Translation
    const { t: translate } = useTranslation("member");

    return (
        <section className="member__section">
            <Container className="member__section_container">
                <h2 className="member__section_title">
                    {translate("title")}
                </h2>
                <div className="member__section_group__group">
                    {translate("members", { returnObjects: true }).map(
                        (member, index) => (
                            <GroupMember
                                key={index}
                                img="img/placeholder.jpg"
                                altText={translate(
                                    `members.${index}.altText`
                                )}
                                name={translate(`members.${index}.name`)}
                                role={translate(`members.${index}.role`)}
                            />
                        )
                    )}
                </div>
            </Container>
            <Shape section="member" position={["left", "right"]} />
        </section>
    );
};

export default Member;
