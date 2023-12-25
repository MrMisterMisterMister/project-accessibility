import React from "react";
import PropTypes from "prop-types";

// Returns a shape based on the section and actual shape
// Only need two props for section and shape name
const Shape = ({ section, position }) => {
    return (
        <>
            {position.map((position, index) => (
                <span
                    key={index}
                    className={`shape__${section}_${position}`}
                    aria-hidden="true"
                />
            ))}
        </>
    );
};

// Prop type for shape
Shape.propTypes = {
    section: PropTypes.string.isRequired,
    position: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Shape;
