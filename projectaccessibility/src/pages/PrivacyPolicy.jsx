import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Shape from "../components/Shape";

// Privacy policy page
const PrivacyPolicy = () => {
    // Translation
    const { t: translate } = useTranslation("privacypolicy");

    return (
        <>
            <Header />
            <div className="privacypolicy__page">
                <div className="privacypolicy__page_banner">
                    <Shape
                        section="privacypolicy"
                        position={["left", "right"]}
                    />
                </div>
                <Container className="privacypolicy__page_container">
                    <h1 tabIndex="0">{translate("pageTitle")}</h1>
                    <p tabIndex="0" className="text-muted">{translate("lastModified")}</p>
                    <p tabIndex="0">{translate("intro.0")}</p>
                    <p tabIndex="0">{translate("intro.1")}</p>
                    <p tabIndex="0">{translate("intro.2")}</p>

                    <h4 tabIndex="0">{translate("collectedData.title")}</h4>
                    <p tabIndex="0">{translate("collectedData.description")}</p>

                    <h5 tabIndex="0">{translate("collectedData.personalData.title")}</h5>
                    <p tabIndex="0">{translate("collectedData.personalData.content")}</p>

                    <h5 tabIndex="0">{translate("collectedData.medicalData.title")}</h5>
                    <p tabIndex="0">{translate("collectedData.medicalData.content")}</p>

                    <div className="privacypolicy__page_list">
                        <div className="privacypolicy__page_list__item">
                            <div className="privacypolicy__page_list__ordinal">
                                (i)
                            </div>
                            <span tabIndex="0">
                                {translate("collectedData.medicalData.list.0")}
                            </span>
                        </div>
                        <div className="privacypolicy__page_list__item">
                            <div className="privacypolicy__page_list__ordinal">
                                (ii)
                            </div>
                            <span tabIndex="0">
                                {translate("collectedData.medicalData.list.1")}
                            </span>
                        </div>
                        <div className="privacypolicy__page_list__item">
                            <div className="privacypolicy__page_list__ordinal">
                                (iii)
                            </div>
                            <span tabIndex="0">
                                {translate("collectedData.medicalData.list.2")}
                            </span>
                        </div>
                        <div className="privacypolicy__page_list__item">
                            <div className="privacypolicy__page_list__ordinal">
                                (iv)
                            </div>
                            <span tabIndex="0">
                                {translate("collectedData.medicalData.list.3")}
                            </span>
                        </div>
                    </div>

                    <h5 tabIndex="0">{translate("collectedData.companyData.title")}</h5>
                    <p tabIndex="0">{translate("collectedData.companyData.content")}</p>

                    <h5 tabIndex="0">{translate("collectedData.researchData.title")}</h5>
                    <p tabIndex="0">{translate("collectedData.researchData.content")}</p>

                    <h4 tabIndex="0">{translate("purposeOfDataProcessing.title")}</h4>
                    <p tabIndex="0">{translate("purposeOfDataProcessing.intro.0")}</p>
                    <p tabIndex="0">{translate("purposeOfDataProcessing.intro.1")}</p>

                    <h5 tabIndex="0">
                        {translate(
                            "purposeOfDataProcessing.generalPurposeOfProcessing.title"
                        )}
                    </h5>
                    <p tabIndex="0">
                        {translate(
                            "purposeOfDataProcessing.generalPurposeOfProcessing.content"
                        )}
                    </p>

                    <h5 tabIndex="0">
                        {translate(
                            "purposeOfDataProcessing.automaticallyCollectedData.title"
                        )}
                    </h5>
                    <p tabIndex="0">
                        {translate(
                            "purposeOfDataProcessing.automaticallyCollectedData.content"
                        )}
                    </p>

                    <h5 tabIndex="0">
                        {translate(
                            "purposeOfDataProcessing.retentionPeriod.title"
                        )}
                    </h5>
                    <p tabIndex="0">
                        {translate(
                            "purposeOfDataProcessing.retentionPeriod.content"
                        )}
                    </p>

                    <h4 tabIndex="0">{translate("rights.title")}</h4>
                    <p tabIndex="0">{translate("rights.description")}</p>

                    <h5 tabIndex="0">{translate("rights.rightsList.access.title")}</h5>
                    <p tabIndex="0">{translate("rights.rightsList.access.content")}</p>

                    <h5 tabIndex="0">
                        {translate("rights.rightsList.rectification.title")}
                    </h5>
                    <p tabIndex="0">
                        {translate("rights.rightsList.rectification.content.0")}
                    </p>
                    <p tabIndex="0">
                        {translate("rights.rightsList.rectification.content.1")}
                    </p>

                    <h5 tabIndex="0">{translate("rights.rightsList.restriction.title")}</h5>
                    <p tabIndex="0">{translate("rights.rightsList.restriction.content")}</p>

                    <h5 tabIndex="0">{translate("rights.rightsList.portability.title")}</h5>
                    <p tabIndex="0">{translate("rights.rightsList.portability.content")}</p>

                    <h5 tabIndex="0">
                        {translate("rights.rightsList.forgetfulness.title")}
                    </h5>
                    <p tabIndex="0">
                        {translate("rights.rightsList.forgetfulness.content")}
                    </p>

                    <h5 tabIndex="0">{translate("rights.rightsList.objection.title")}</h5>
                    <p tabIndex="0">{translate("rights.rightsList.objection.content")}</p>

                    <h4 tabIndex="0">{translate("cookies.title")}</h4>
                    <p tabIndex="0">{translate("cookies.intro.0")}</p>
                    <p tabIndex="0">{translate("cookies.intro.1")}</p>
                    <p tabIndex="0">{translate("cookies.intro.2")}</p>
                    <p tabIndex="0">{translate("cookies.intro.3")}</p>

                    <div className="privacypolicy__page_list">
                        <div className="privacypolicy__page_list__item">
                            <div className="privacypolicy__page_list__ordinal">
                                (i)
                            </div>
                            <span tabIndex="0">
                                {translate(
                                    "cookies.purpose.authenticationStatus"
                                )}
                            </span>
                        </div>
                        <div className="privacypolicy__page_list__item">
                            <div className="privacypolicy__page_list__ordinal">
                                (ii)
                            </div>
                            <span tabIndex="0">
                                {translate("cookies.purpose.personalization")}
                            </span>
                        </div>
                        <div className="privacypolicy__page_list__item">
                            <div className="privacypolicy__page_list__ordinal">
                                (iii)
                            </div>
                            <span tabIndex="0">{translate("cookies.purpose.security")}</span>
                        </div>
                        <div className="privacypolicy__page_list__item">
                            <div className="privacypolicy__page_list__ordinal">
                                (iv)
                            </div>
                            <span tabIndex="0">{translate("cookies.purpose.analysis")}</span>
                        </div>
                    </div>

                    <h4 tabIndex="0">{translate("privacyPolicyChanges.title")}</h4>
                    <p tabIndex="0">{translate("privacyPolicyChanges.content")}</p>

                    <h4 tabIndex="0">{translate("contactDetails.title")}</h4>
                    <p tabIndex="0">{translate("contactDetails.content")}</p>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;
