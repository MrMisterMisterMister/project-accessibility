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

                    <nav aria-label="Jump to content">
                        <ul>
                            <li><a href="#collected-data">1. {translate("collectedData.title")}</a></li>
                            <li><a href="#personal-data">2. {translate("collectedData.personalData.title")}</a></li>
                            <li><a href="#medical-data">3. {translate("collectedData.medicalData.title")}</a></li>
                            <li><a href="#company-data">4. {translate("collectedData.companyData.title")}</a></li>
                            <li><a href="#research-data">5. {translate("collectedData.researchData.title")}</a></li>
                            <li><a href="#purpose-of-data-processing">6. {translate("purposeOfDataProcessing.title")}</a></li>
                            <li><a href="#general-purpose-of-data-processing">7. {translate("purposeOfDataProcessing.generalPurposeOfProcessing.title")}</a></li>
                            <li><a href="#automatically-collected-data">8. {translate("purposeOfDataProcessing.automaticallyCollectedData.title")}</a></li>
                            <li><a href="#retention-period">9. {translate("purposeOfDataProcessing.retentionPeriod.title")}</a></li>
                            <li><a href="#your-rights">10. {translate("rights.title")}</a></li>
                            <li><a href="#right-to-access">11. {translate("rights.rightsList.access.title")}</a></li>
                            <li><a href="#right-of-rectification">12. {translate("rights.rightsList.rectification.title")}</a></li>
                            <li><a href="#right-to-restrict-processing">13. {translate("rights.rightsList.restriction.title")}</a></li>
                            <li><a href="#right-to-data-portability">14. {translate("rights.rightsList.portability.title")}</a></li>
                            <li><a href="#right-to-erasure">15. {translate("rights.rightsList.forgetfulness.title")}</a></li>
                            <li><a href="#right-to-object-and-other-rights">16. {translate("rights.rightsList.objection.title")}</a></li>
                            <li><a href="#cookies">17. {translate("cookies.title")}</a></li>
                            <li><a href="#changes-to-the-privacy-policy">18. {translate("privacyPolicyChanges.title")}</a></li>
                            <li><a href="#contact-details">19. {translate("contactDetails.title")}</a></li>
                        </ul>
                    </nav>

                    <br />

                    <h4 tabIndex="0" id="collected-data">{translate("collectedData.title")}</h4>
                    <p tabIndex="0">{translate("collectedData.description")}</p>

                    <h5 tabIndex="0" id="personal-data">{translate("collectedData.personalData.title")}</h5>
                    <p tabIndex="0">{translate("collectedData.personalData.content")}</p>

                    <h5 tabIndex="0" id="medical-data">{translate("collectedData.medicalData.title")}</h5>
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

                    <h5 tabIndex="0" id="company-data">{translate("collectedData.companyData.title")}</h5>
                    <p tabIndex="0">{translate("collectedData.companyData.content")}</p>

                    <h5 tabIndex="0" id="research-data">{translate("collectedData.researchData.title")}</h5>
                    <p tabIndex="0">{translate("collectedData.researchData.content")}</p>

                    <h4 tabIndex="0" id="purpose-of-data-processing">{translate("purposeOfDataProcessing.title")}</h4>
                    <p tabIndex="0">{translate("purposeOfDataProcessing.intro.0")}</p>
                    <p tabIndex="0">{translate("purposeOfDataProcessing.intro.1")}</p>

                    <h5 tabIndex="0" id="general-purpose-of-data-processing">
                        {translate(
                            "purposeOfDataProcessing.generalPurposeOfProcessing.title"
                        )}
                    </h5>
                    <p tabIndex="0">
                        {translate(
                            "purposeOfDataProcessing.generalPurposeOfProcessing.content"
                        )}
                    </p>

                    <h5 tabIndex="0" id="automatically-collected-data">
                        {translate(
                            "purposeOfDataProcessing.automaticallyCollectedData.title"
                        )}
                    </h5>
                    <p tabIndex="0">
                        {translate(
                            "purposeOfDataProcessing.automaticallyCollectedData.content"
                        )}
                    </p>

                    <h5 tabIndex="0" id="retention-period">
                        {translate(
                            "purposeOfDataProcessing.retentionPeriod.title"
                        )}
                    </h5>
                    <p tabIndex="0">
                        {translate(
                            "purposeOfDataProcessing.retentionPeriod.content"
                        )}
                    </p>

                    <h4 tabIndex="0" id="your-rights">{translate("rights.title")}</h4>
                    <p tabIndex="0">{translate("rights.description")}</p>

                    <h5 tabIndex="0" id="right-to-access">{translate("rights.rightsList.access.title")}</h5>
                    <p tabIndex="0">{translate("rights.rightsList.access.content")}</p>

                    <h5 tabIndex="0" id="right-of-rectification">
                        {translate("rights.rightsList.rectification.title")}
                    </h5>
                    <p tabIndex="0">
                        {translate("rights.rightsList.rectification.content.0")}
                    </p>
                    <p tabIndex="0">
                        {translate("rights.rightsList.rectification.content.1")}
                    </p>

                    <h5 tabIndex="0" id="right-to-restrict-processing">{translate("rights.rightsList.restriction.title")}</h5>
                    <p tabIndex="0">{translate("rights.rightsList.restriction.content")}</p>

                    <h5 tabIndex="0" id="right-to-data-portability">{translate("rights.rightsList.portability.title")}</h5>
                    <p tabIndex="0">{translate("rights.rightsList.portability.content")}</p>

                    <h5 tabIndex="0" id="right-to-erasure">
                        {translate("rights.rightsList.forgetfulness.title")}
                    </h5>
                    <p tabIndex="0">
                        {translate("rights.rightsList.forgetfulness.content")}
                    </p>

                    <h5 tabIndex="0" id="right-to-object-and-other-rights">{translate("rights.rightsList.objection.title")}</h5>
                    <p tabIndex="0">{translate("rights.rightsList.objection.content")}</p>

                    <h4 tabIndex="0" id="cookies">{translate("cookies.title")}</h4>
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

                    <h4 tabIndex="0" id="changes-to-the-privacy-policy">{translate("privacyPolicyChanges.title")}</h4>
                    <p tabIndex="0">{translate("privacyPolicyChanges.content")}</p>

                    <h4 tabIndex="0" id="contact-details">{translate("contactDetails.title")}</h4>
                    <p tabIndex="0">{translate("contactDetails.content")}</p>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;
