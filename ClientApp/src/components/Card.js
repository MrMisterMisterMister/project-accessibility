import React from 'react';

// Expertise cards for the homepage
// Has props for icon, title and text
// The icon can be svg
const CardExpertise = ({ icon, title, text }) => {
    return (
        <div className="card__expertise_item">
            <div className="card__expertise_icon">
                {icon}
            </div>
            <h3 className="card__expertise_title">{title}</h3>
            <p className="card__expertise_text">{text}</p>
        </div>
    );
}

// News article
// Image needs to be inserted from the basePath
const CardNews = ({ img, altText, date, title, text }) => (
    <div className="card__news_item">
        <div className="card__news_banner">
            <img src={img}  alt={altText} />
        </div>
        <div className="card__news_content">
            <span className="card__news_content__date">{date}</span>
            <h3 className="card__news_content__title">{title}</h3>
            <p className="card__news_content__text">{text}</p>
        </div>
    </div>
);

export { CardExpertise, CardNews };