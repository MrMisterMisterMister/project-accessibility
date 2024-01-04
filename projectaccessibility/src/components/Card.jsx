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

const CardPanelMember = ({ img, altText, guardian, firstName, lastName, zipcode, dateofbirth}) => (
    <div className="card__user_item">
        <img className="card__user_img"
        src={img}
        alt={altText}
        />
        <div className="card__user_content">
            <div className="card__user_name">{firstName} {lastName}</div>
            <div className="card__user_props">
                <strong>Guardian:</strong>  {guardian} <br />
                <strong>Zipcode:</strong> {zipcode}<br />
                <strong>Date of Birth:</strong> {dateofbirth}
                </div>
        </div>
    </div>
);

// Prop type for panelmember
CardPanelMember.propTypes = {
    img: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    guardian: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    dateofbirth: PropTypes.string.isRequired
};

export { CardExpertise, CardNews, CardCase, CardPanelMember };
