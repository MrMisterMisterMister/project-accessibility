import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

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
    // Translation
    const { t: translate } = useTranslation();

    return (
        <>
            {Object.keys(data).length > 0 && (
                <div className="alert alert__error">
                    {Object.entries(data).map(([key, value]) => (
                        <span key={key}>{translate(`alert.error.${key}`)}</span>
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
