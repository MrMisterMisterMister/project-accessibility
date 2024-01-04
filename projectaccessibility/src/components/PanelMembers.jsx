import { Container } from "react-bootstrap";
import { CardPanelMember } from "./Card";

function PanelMembers() {
  const panelMembers = [];

  for (let i = 1; i < 51; i++) {
    const member = {
      id: i + 1,
      FirstName: "Clodsire" + i,
      LastName: "nekalakininahappenawewanatin" + i,
      Guardian: "Guardian" + i,
      zipcode: "1111AB",
      dateOfBirth: "12/12/12",
      img: "img/placeholder.jpg",
    };
    panelMembers.push(member);
  }

  return (
    <section className="user__section">
      <Container className="user__section_container">
        <div className="user__section_group__card">
          {panelMembers.map((panelMember) => (
              <CardPanelMember key={panelMember.id} 
                img="img/placeholder.jpg"
                altText={"panel member"}
                guardian={panelMember.Guardian}
                firstName={panelMember.FirstName}
                lastName={panelMember.LastName}
                zipcode={panelMember.zipcode}
                dateofbirth={panelMember.dateOfBirth}
              />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default PanelMembers;
