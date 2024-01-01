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

    // In case something weird happens and data is undefined, catch the error
    // Afterwards just return a default error message
    // If you get this error, API server is probably down
    if (!data) {
        return (
            <div className="alert alert__error">
                <span>{translate("alert.error.defaultMessage")}</span>
            </div>
        );
    }

    // Check if the data is an array or not, otherwise convert it to an array, so no weird white screen
    const dataArray = Array.isArray(data) ? data : [data];

    return (
        <>
            {
                // This one checks if there are items in the array which have a non-empty object
                // Also checks if the array itself isn't empty by looking at the length
                dataArray.some(item => Object.keys(item).length > 0) &&
                dataArray.map((item, index) => (
                    <div key={index} className="alert alert__error">
                        {Object.entries(item).map(([key, value]) => (
                            // Only need the code, since that way I can generate the localization for the error message
                            // Could be made better by removing the unneeded parts, but this is my lazy way
                            key === "code" && (
                                <span key={key}>{translate(`alert.error.form.${value}`)}</span>
                            )
                        ))}
                    </div>
                ))
            }
        </>
    );
};

// prop type for alertError
// It can be an array or object, because there can be multiple errors in one alert for example
AlertError.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.object, PropTypes.array
    ])
};

export { AlertError, AlertSuccess };
