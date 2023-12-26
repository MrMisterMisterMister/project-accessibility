import React from "react";
import PropTypes from "prop-types";

// Create a group of members to be used on the homepage
// Image path needs to be the base to work
// Metadata can be expanded
const GroupMember = ({ img, altText, name, role }) => {
    return (
        <div className="member__group_item">
            <img src={img} alt={altText} />
            <h3 className="member__group_name">{name}</h3>
            <div className="member__group_metadata">
                <div className="member__group_metadata__role">{role}</div>
            </div>
        </div>
    );
};

// Prop type for groupmember
GroupMember.propTypes = {
    img: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
};

export { GroupMember };
