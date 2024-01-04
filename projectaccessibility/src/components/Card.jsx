import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Expertise cards for the homepage
// Has props for icon, title and text
// The icon can be svg
const CardExpertise = ({ icon, title, text }) => {
    return (
        <div className="card__expertise_item">
            <div className="card__expertise_icon">{icon}</div>
            <h3 className="card__expertise_title">{title}</h3>
            <p className="card__expertise_text">{text}</p>
        </div>
    );
};

// Prop type for cardexpertise
CardExpertise.propTypes = {
    icon: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

// News article
// Image needs to be inserted from the basePath
const CardNews = ({ img, altText, date, title, text }) => (
    <div className="card__news_item">
        <div className="card__news_banner">
            <img src={img} alt={altText} />
        </div>
        <div className="card__news_content">
            <span className="card__news_content__date">{date}</span>
            <h3 className="card__news_content__title">{title}</h3>
            <p className="card__news_content__text">{text}</p>
        </div>
    </div>
);

// Prop type for cardnews
CardNews.propTypes = {
    img: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

// Case in card components homepage
// Path for case
const CardCase = ({ img, altText, title, text, path, linkText }) => (
    <div className="card__case_item">
        <img
            className="card__case_image"
            src={img}
            alt={altText}
            width="1200"
        />
        <div className="card__case_content">
            <h3 className="card__case_content__title">{title}</h3>
            <p className="card__case_content__text">{text}</p>
            <Link className="card__case_content__link" href={path}>
                {linkText}
            </Link>
        </div>
    </div>
);

// Prop type for cardcase
CardCase.propTypes = {
    img: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired
};

// Panelmembers in a card component
const CardPanelMember = ({ img, altText, guardian, firstName, lastName, zipcode, dateofbirth = "N/A" }) => (
    <div className="card__user_item">
        <img className="card__user_img"
            src={img}
            alt={altText}
        />
        <div className="card__user_content">
            <h3 className="card__user_heading">{firstName}</h3>
            <h3 className="card__user_heading_second">{lastName}</h3>
            <hr className="card__user_separator"/>
            <div className="card__user_props">
                <strong className="card__user_prop_item">Guardian:</strong>  {guardian} <br />
                <strong className="card__user_prop_item">Zipcode:</strong> {zipcode}<br />
                <strong className="card__user_prop_item">Date of Birth:</strong> {dateofbirth}
            </div>
        </div>
    </div>
);

// Prop type for panelmember
CardPanelMember.propTypes = {
    img: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    guardian: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    zipcode: PropTypes.string,
    dateofbirth: PropTypes.string
};

// Panelmembers in a card component
const CardCompany = ({
    img, altText, kvk, name, adres = "Route 16",
    location = "Lake Verity", country = "Sinnoh",
    url = "https://herta.eu.org", contact = "Prof. Rowan"
}) => (
    <div className="card__user_item">
        <img className="card__user_img"
            src={img}
            alt={altText}
        />
        <div className="card__user_content">
            <h3 className="card__user_heading">{name}</h3>
            <h3 className="card__user_heading_second card__user_url">{url}</h3>
            <hr className="card__user_separator"/>
            <div className="card__user_props">
                <strong className="card__user_prop_item">Kvk:</strong>  {kvk} <br />
                <strong className="card__user_prop_item">Adres:</strong>  {adres} <br />
                <strong className="card__user_prop_item">Location:</strong> {location}<br />
                <strong className="card__user_prop_item">Country:</strong> {country} <br />
                <strong className="card__user_prop_item">Contact:</strong> {contact} <br />
            </div>
        </div>
    </div>
);

// Prop type for panelmember
CardCompany.propTypes = {
    img: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    kvk: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    adres: PropTypes.string,
    location: PropTypes.string,
    country: PropTypes.string,
    url: PropTypes.string,
    contact: PropTypes.string
};

export { CardExpertise, CardNews, CardCase, CardPanelMember, CardCompany };
