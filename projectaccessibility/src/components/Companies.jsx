import { useState, useEffect } from "react";
import { CardCompany } from "./Card";
import { getRequest } from "../api/axiosClient";

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
        <div className="user__card">
            <div className="user__card_group">
                {companies.map((company) => (
                    <CardCompany
                        key={company.id}
                        img="/img/clodsire.gif"
                        altText={"Gif of Clodsire bouncing up and down"}
                        kvk={company.kvk}
                        name={company.name}
                        adres={company.adres}
                        location={company.location}
                        url={company.url}
                        contact={company.contact}
                    />
                ))}
            </div>
        </div>
    );
};

export default Companies;
