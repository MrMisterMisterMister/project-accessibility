import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DateFormatter } from "./Formatter";
import PropTypes from "prop-types";

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
const CardNews = ({ img, altText, date, title, text }) => {
    return (
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
};

// Prop type for cardnews
CardNews.propTypes = {
    img: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

// About card
// Has things like mission and vision
// Something
const CardAbout = ({ icon, title, text }) => {
    return (
        <div className="card__about_item">
            <div className="card__about_content">
                <div className="card__about_content__icon">{icon}</div>
                <h3 className="card__about_content__title">{title}</h3>
                <p className="card__about_content__text">{text}</p>
            </div>
        </div>
    );
};

// Prop type for cardabout
CardAbout.propTypes = {
    icon: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

// Case in card components homepage
// Path for case
const CardCase = ({ img, altText, title, text, path, linkText }) => {
    return (
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
};

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
const CardPanelMemberView = ({ data }) => {
    // Translation
    const { t: translate } = useTranslation("panelmember");

    return (
        <div className="user__card">
            <div className="user__card_group">
                {data.map((panelmember) => (
                    <div className="card__user_item" key={panelmember.id}>
                        <img
                            className="card__user_img"
                            src="/img/placeholder.jpg"
                            alt="Picture of Clodsire"
                        />
                        <div className="card__user_content">
                            <div className="card__user_heading">
                                <h4 className="card__user_title">
                                    {panelmember.firstName}{" "}
                                    {panelmember.lastName}
                                </h4>
                            </div>
                            <div className="card__user_props">
                                <p>
                                    <span className="card__user_prop_item">
                                        {translate("labels.email")}:
                                    </span>
                                    {panelmember.email}
                                </p>
                                <p>
                                    <span className="card__user_prop_item">
                                        {translate("labels.dateOfBirth")}:
                                    </span>
                                    {DateFormatter.format(new Date(panelmember.dateOfBirth))}
                                </p>
                                <p>
                                    <span className="card__user_prop_item">
                                        {translate("labels.address")}:
                                    </span>
                                    {panelmember.address}
                                </p>
                                <p>
                                    <span className="card__user_prop_item">
                                        {translate("labels.postalCode")}:
                                    </span>
                                    {panelmember.postalCode}
                                </p>
                                <p>
                                    <span className="card__user_prop_item">
                                        {translate("labels.city")}:
                                    </span>
                                    {panelmember.city}
                                </p>
                                <p>
                                    <span className="card__user_prop_item">
                                        {translate("labels.country")}:
                                    </span>
                                    {panelmember.country}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Prop type for panelmember
CardPanelMemberView.propTypes = {
    data: PropTypes.array
};

// Panelmembers in a card component
const CardCompanyView = ({ data }) => {
    // Translation
    const { t: translate } = useTranslation("company");

    return (
        <div className="user__card">
            <div className="user__card_group">
                {data.map((company) => (
                    <div className="card__user_item" key={company.id}>
                        <img
                            className="card__user_img"
                            src="/img/placeholder.jpg"
                            alt="Picture of Clodsire"
                        />
                        <div className="card__user_content">
                            <div className="card__user_heading">
                                <h4 className="card__user_title">
                                    {company.companyName}
                                </h4>
                                <span className="card__user_website">
                                    {company.websiteUrl}
                                </span>
                            </div>
                            <div className="card__user_props">
                                <p>
                                    <span className="card__user_prop_item">
                                        {translate("labels.kvk")}:
                                    </span>
                                    {company.kvk}
                                </p>
                                <p>
                                    <span className="card__user_prop_item">
                                        {translate("labels.email")}:
                                    </span>
                                    {company.email}
                                </p>
                                <p>
                                    <span className="card__user_prop_item">
                                        {translate("labels.phone")}:
                                    </span>
                                    {company.phone}
                                </p>
                                <p>
                                    <span className="card__user_prop_item">
                                        {translate("labels.address")}:
                                    </span>
                                    {company.address}
                                </p>
                                <p>
                                    <span className="card__user_prop_item">
                                        {translate("labels.postalCode")}:
                                    </span>
                                    {company.postalCode}
                                </p>
                                <p>
                                    <span className="card__user_prop_item">
                                        {translate("labels.province")}:
                                    </span>
                                    {company.province}
                                </p>
                                <p>
                                    <span className="card__user_prop_item">
                                        {translate("labels.country")}:
                                    </span>
                                    {company.country}
                                </p>
                                <p>
                                    <span className="card__user_prop_item">
                                        {translate("labels.contactPerson")}:
                                    </span>
                                    {company.contactPerson}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Prop type for panelmember
CardCompanyView.propTypes = {
    data: PropTypes.array
};

export {
    CardExpertise,
    CardNews,
    CardAbout,
    CardCase,
    CardPanelMemberView,
    CardCompanyView
};
