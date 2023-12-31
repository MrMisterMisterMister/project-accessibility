import React from "react";
import PropTypes from "prop-types";

// to display alerts that are ok
// still need to be worked on
const AlertSuccess = () => {
    return (
        <></>
    );
};

// alert component for errors
// expects an object and loops over it
const AlertError = ({ data }) => {
    return (
        <>
            {Object.keys(data).length > 0 && (
                <div className="alert alert__error">
                    {Object.entries(data).map(([key, value]) => (
                        <span key={key}>{value}</span>
                    ))}
                </div>
            )}
        </>
    );
};

// prop type for alertError
AlertError.propTypes = {
    data: PropTypes.object.isRequired
};

export { AlertError, AlertSuccess };
