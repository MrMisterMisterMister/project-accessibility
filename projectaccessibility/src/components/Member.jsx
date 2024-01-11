import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Shape from "./Shape";
import { GroupMember } from "./Group";

const Member = () => {
    const { t: translate } = useTranslation("aboutus");

    return (
        <section className="member__section">
            <Container className="member__section_container">
                <h2 className="member__section_title">{translate("team.title")}</h2>
                <div className="member__section_group__group">
                    {translate("team.members", { returnObjects: true }).map(
                        (member, index) => (
                            <GroupMember
                                key={index}
                                img={`img/team/${index + 1}.jpg`} // Assuming images are named 1.jpg, 2.jpg, etc.
                                altText={translate(`team.members.${index}.altText`)}
                                name={translate(`team.members.${index}.name`)}
                                role={translate(`team.members.${index}.role`)}
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
