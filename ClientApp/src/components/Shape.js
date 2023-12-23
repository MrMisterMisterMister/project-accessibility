import React from "react";

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

export default Shape;
