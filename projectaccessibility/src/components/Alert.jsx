import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

// alert component for errors
// expects an object and loops over it
// merged both alerts into one, now it handles success and errors
const Alert = ({ data }) => {
    // Translation
    const { t: translate } = useTranslation("alert");

    // Some basic stuff
    // Just checks if there are any error or success
    // Afterwards just create the alert itself
    return (
        <>
            {data.error &&
                (Array.isArray(data.error) ? data.error : [data.error]).map((key, index) => (
                    <div className="alert alert__error" key={index} data-testid="error-alert">
                        <span>{translate(`error.${key.code}`)}</span>
                    </div>
                ))}

            {data.success &&
                (Array.isArray(data.success) ? data.success : [data.success]).map((key, index) => (
                    <div className="alert alert__success" key={index} data-testid="success-alert">
                        <span>{translate(`success.${key.code}`)}</span>
                    </div>
                ))}
        </>
    );
};

// prop type for alertError
// It can be an array or object, because there can be multiple errors in one alert for example
Alert.propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export { Alert };
