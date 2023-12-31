import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

// to display alerts that are ok
// still need to be worked on
const AlertSuccess = () => {
    return <></>;
};

// alert component for errors
// expects an object and loops over it
const AlertError = ({ data }) => {
    // Translation
    const { t: translate } = useTranslation();

    return (
        <>
            {(Array.isArray(data) ? data : [data]).map((item, index) => (
                <div key={index} className="alert alert__error">
                    {Object.entries(item).map(([key, value]) => (
                        <span key={key}>{value}</span>
                    ))}
                </div>
            ))}
        </>
    );
};

// prop type for alertError
// It can be an array or object, because there can be multiple errors in one alert for example
AlertError.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.object, PropTypes.array
    ]).isRequired
};

export { AlertError, AlertSuccess };
