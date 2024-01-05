import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { getRequest } from "../api/axiosClient";
import { CardCompany } from "./Card";

const Companies = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        getRequest("companies")
            .then(res => {
                setCompanies(res.data);
            })
            .catch(err => {
                console.log(err.res);
            });
    }, []);

    return (
        <section className="user__section">
            <Container className="user__section_container">
                <div className="user__section_group__card">
                    {companies.map((company) => (
                        <CardCompany key={company.id}
                            img="/img/clodsire.gif"
                            altText={"company"}
                            kvk={company.kvk}
                            name={company.name}
                            adres={company.adres}
                            location={company.location}
                            url={company.url}
                            contact={company.contact}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Companies;
