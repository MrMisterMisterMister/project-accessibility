import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { CardPanelMember } from "./Card";
import { getRequest } from "../api/axiosClient";

function PanelMembers() {
  const [panelMembers, setPanelMembers] = useState([]);

  useEffect(() => {
    getRequest("panelmembers")
      .then(res => {
        setPanelMembers(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <section className="user__section">
      <Container className="user__section_container">
        <div className="user__section_group__card">
          {panelMembers.map((panelMember) => (
            <CardPanelMember key={panelMember.id} 
              img="img/placeholder.jpg"
              altText={"panel member"}
              guardian={panelMember.guardian}
              firstName={panelMember.firstName}
              lastName={panelMember.lastName}
              zipcode={panelMember.zipcode}
              dateofbirth={panelMember.dateofbirth}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default PanelMembers;
