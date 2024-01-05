import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Shape from "../components/Shape";

// Privacy policy page
const PrivacyPolicy = () => {
    // Translation
    const { t: translate } = useTranslation();

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
                    <h1 tabIndex="0">{translate("privacypolicy.pageTitle")}</h1>
                    <p tabIndex="0" className="text-muted">
                        {translate("privacypolicy.lastModified")}
                    </p>
                    <p tabIndex="0">{translate("privacypolicy.intro.0")}</p>
                    <p tabIndex="0">{translate("privacypolicy.intro.1")}</p>
                    <p tabIndex="0">{translate("privacypolicy.intro.2")}</p>

                    <h2 tabIndex="0">{translate("privacypolicy.collectedData.title")}</h2>
                    <p tabIndex="0">
                        {translate("privacypolicy.collectedData.description")}
                    </p>

                    <h2 tabIndex="0">
                        {translate(
                            "privacypolicy.collectedData.personalData.title"
                        )}
                    </h2>
                    <p tabIndex="0">
                        {translate(
                            "privacypolicy.collectedData.personalData.content"
                        )}
                    </p>

                    <h2 tabIndex="0">
                        {translate(
                            "privacypolicy.collectedData.medicalData.title"
                        )}
                    </h2>
                    <p tabIndex="0">
                        {translate(
                            "privacypolicy.collectedData.medicalData.content"
                        )}
                    </p>

                    <div className="privacypolicy__page_list">
                        <div className="privacypolicy__page_list__item">
                            <div className="privacypolicy__page_list__ordinal">
                                (i)
                            </div>
                            <span tabIndex="0">
                                {translate(
                                    "privacypolicy.collectedData.medicalData.list.0"
                                )}
                            </span>
                        </div>
                        <div className="privacypolicy__page_list__item">
                            <div className="privacypolicy__page_list__ordinal">
                                (ii)
                            </div>
                            <span tabIndex="0">
                                {translate(
                                    "privacypolicy.collectedData.medicalData.list.1"
                                )}
                            </span>
                        </div>
                        <div className="privacypolicy__page_list__item">
                            <div className="privacypolicy__page_list__ordinal">
                                (iii)
                            </div>
                            <span tabIndex="0">
                                {translate(
                                    "privacypolicy.collectedData.medicalData.list.2"
                                )}
                            </span>
                        </div>
                        <div className="privacypolicy__page_list__item">
                            <div className="privacypolicy__page_list__ordinal">
                                (iv)
                            </div>
                            <span tabIndex="0">
                                {translate(
                                    "privacypolicy.collectedData.medicalData.list.3"
                                )}
                            </span>
                        </div>
                    </div>

                    <h2 tabIndex="0">
                        {translate(
                            "privacypolicy.collectedData.companyData.title"
                        )}
                    </h2>
                    <p tabIndex="0">
                        {translate(
                            "privacypolicy.collectedData.companyData.content"
                        )}
                    </p>

                    <h2 tabIndex="0">
                        {translate(
                            "privacypolicy.collectedData.researchData.title"
                        )}
                    </h2>
                    <p tabIndex="0">
                        {translate(
                            "privacypolicy.collectedData.researchData.content"
                        )}
                    </p>

                    <h2 tabIndex="0">
                        {translate(
                            "privacypolicy.purposeOfDataProcessing.title"
                        )}
                    </h2>
                    <p tabIndex="0">
                        {translate(
                            "privacypolicy.purposeOfDataProcessing.intro.0"
                        )}
                    </p>
                    <p tabIndex="0">
                        {translate(
                            "privacypolicy.purposeOfDataProcessing.intro.1"
                        )}
                    </p>

                    <h2 tabIndex="0">
                        {translate(
                            "privacypolicy.purposeOfDataProcessing.generalPurposeOfProcessing.title"
                        )}
                    </h2>
                    <p tabIndex="0">
                        {translate(
                            "privacypolicy.purposeOfDataProcessing.generalPurposeOfProcessing.content"
                        )}
                    </p>

                    <h2 tabIndex="0">
                        {translate(
                            "privacypolicy.purposeOfDataProcessing.automaticallyCollectedData.title"
                        )}
                    </h2>
                    <p tabIndex="0">
                        {translate(
                            "privacypolicy.purposeOfDataProcessing.automaticallyCollectedData.content"
                        )}
                    </p>

                    <h2 tabIndex="0">
                        {translate(
                            "privacypolicy.purposeOfDataProcessing.retentionPeriod.title"
                        )}
                    </h2>
                    <p tabIndex="0">
                        {translate(
                            "privacypolicy.purposeOfDataProcessing.retentionPeriod.content"
                        )}
                    </p>

                    <h2 tabIndex="0">{translate("privacypolicy.rights.title")}</h2>
                    <p tabIndex="0">{translate("privacypolicy.rights.description")}</p>

                    <h2 tabIndex="0">
                        {translate(
                            "privacypolicy.rights.rightsList.access.title"
                        )}
                    </h2>
                    <p tabIndex="0">
                        {translate(
                            "privacypolicy.rights.rightsList.access.content"
                        )}
                    </p>

                    <h2 tabIndex="0">
                        {translate(
                            "privacypolicy.rights.rightsList.rectification.title"
                        )}
                    </h2>
                    <p tabIndex="0">
                        {translate(
                            "privacypolicy.rights.rightsList.rectification.content.0"
                        )}
                    </p>
                    <p tabIndex="0">
                        {translate(
                            "privacypolicy.rights.rightsList.rectification.content.1"
                        )}
                    </p>

                    <h2 tabIndex="0">
                        {translate(
                            "privacypolicy.rights.rightsList.restriction.title"
                        )}
                    </h2>
                    <p tabIndex="0">
                        {translate(
                            "privacypolicy.rights.rightsList.restriction.content"
                        )}
                    </p>

                    <h2 tabIndex="0">
                        {translate(
                            "privacypolicy.rights.rightsList.portability.title"
                        )}
                    </h2>
                    <p tabIndex="0"> 
                        {translate(
                            "privacypolicy.rights.rightsList.portability.content"
                        )}
                    </p>

                    <h2 tabIndex="0">
                        {translate(
                            "privacypolicy.rights.rightsList.forgetfulness.title"
                        )}
                    </h2>
                    <p tabIndex="0">
                        {translate(
                            "privacypolicy.rights.rightsList.forgetfulness.content"
                        )}
                    </p>

                    <h2 tabIndex="0">
                        {translate(
                            "privacypolicy.rights.rightsList.objection.title"
                        )}
                    </h2>
                    <p tabIndex="0">
                        {translate(
                            "privacypolicy.rights.rightsList.objection.content"
                        )}
                    </p>

                    <h2 tabIndex="0">{translate("privacypolicy.cookies.title")}</h2>
                    <p tabIndex="0">{translate("privacypolicy.cookies.intro.0")}</p>
                    <p tabIndex="0">{translate("privacypolicy.cookies.intro.1")}</p>
                    <p tabIndex="0">{translate("privacypolicy.cookies.intro.2")}</p>
                    <p tabIndex="0">{translate("privacypolicy.cookies.intro.3")}</p>

                    <div className="privacypolicy__page_list">
                        <div className="privacypolicy__page_list__item">
                            <div className="privacypolicy__page_list__ordinal">
                                (i)
                            </div>
                            <span tabIndex="0">
                                {translate(
                                    "privacypolicy.cookies.purpose.authenticationStatus"
                                )}
                            </span>
                        </div>
                        <div className="privacypolicy__page_list__item">
                            <div className="privacypolicy__page_list__ordinal">
                                (ii)
                            </div>
                            <span tabIndex="0">
                                {translate(
                                    "privacypolicy.cookies.purpose.personalization"
                                )}
                            </span>
                        </div>
                        <div className="privacypolicy__page_list__item">
                            <div className="privacypolicy__page_list__ordinal">
                                (iii)
                            </div>
                            <span tabIndex="0">
                                {translate(
                                    "privacypolicy.cookies.purpose.security"
                                )}
                            </span>
                        </div>
                        <div className="privacypolicy__page_list__item">
                            <div className="privacypolicy__page_list__ordinal">
                                (iv)
                            </div>
                            <span tabIndex="0"  >
                                {translate(
                                    "privacypolicy.cookies.purpose.analysis"
                                )}
                            </span>
                        </div>
                    </div>

                    <h2 tabIndex="0">
                        {translate("privacypolicy.privacyPolicyChanges.title")}
                    </h2>
                    <p tabIndex="0">
                        {translate(
                            "privacypolicy.privacyPolicyChanges.content"
                        )}
                    </p>

                    <h2 tabIndex="0">{translate("privacypolicy.contactDetails.title")}</h2>
                    <p tabIndex="0">{translate("privacypolicy.contactDetails.content")}</p>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;
