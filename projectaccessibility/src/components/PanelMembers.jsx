import { useState, useEffect } from "react";
import { getRequest } from "../api/axiosClient";
import { CardPanelMember } from "./Card";

const PanelMembers = () => {
    const [panelMembers, setPanelMembers] = useState([]);

    useEffect(() => {
        getRequest("panelmembers")
            .then(res => {
                setPanelMembers(res.data);
            })
            .catch(err => {
                console.log(err.res);
            });
    }, []);

    return (
        <div className="user__card">
            <div className="user__card_group">
                {panelMembers.map((panelMember) => (
                    <CardPanelMember key={panelMember.id}
                        img="img/placeholder.jpg"
                        altText={"Picture of Clodsire"}
                        guardian={panelMember.guardian}
                        firstName={panelMember.firstName}
                        lastName={panelMember.lastName}
                        zipcode={panelMember.zipcode}
                        dateofbirth={panelMember.dateofbirth}
                    />
                ))}
            </div>
        </div>
    );
};

export default PanelMembers;
