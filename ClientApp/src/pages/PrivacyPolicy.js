import React from "react";
import { Container } from "reactstrap";
import { useTranslation } from "react-i18next";
import Shape from "../components/Shape";

// Privacy policy page
const PrivacyPolicy = () => {
    // Translation
    const { t: translate } = useTranslation();

    return (
        <div className="privacypolicy__page">
            <div className="privacypolicy__page_banner">
                <Shape section="privacypolicy" position={["left", "right"]} />
            </div>
            <Container className="privacypolicy__page_container">
                <h1>{translate("privacypolicy.pageTitle")}</h1>
                <p className="text-muted">{translate("privacypolicy.lastModified")}</p>
                <p>{translate("privacypolicy.intro.0")}</p>
                <p>{translate("privacypolicy.intro.1")}</p>
                <p>{translate("privacypolicy.intro.2")}</p>

                <h4>{translate("privacypolicy.collectedData.title")}</h4>
                <p>{translate("privacypolicy.collectedData.description")}</p>

                <h5>{translate("privacypolicy.collectedData.personalData.title")}</h5>
                <p>{translate("privacypolicy.collectedData.personalData.content")}</p>

                <h5>{translate("privacypolicy.collectedData.medicalData.title")}</h5>
                <p>{translate("privacypolicy.collectedData.medicalData.content")}</p>

                <div className="privacypolicy__page_list">
                    <div className="privacypolicy__page_list__item">
                        <div className="privacypolicy__page_list__ordinal">(i)</div>
                        <span>{translate("privacypolicy.collectedData.medicalData.list.0")}</span>
                    </div>
                    <div className="privacypolicy__page_list__item">
                        <div className="privacypolicy__page_list__ordinal">(ii)</div>
                        <span>{translate("privacypolicy.collectedData.medicalData.list.1")}</span>
                    </div>
                    <div className="privacypolicy__page_list__item">
                        <div className="privacypolicy__page_list__ordinal">(iii)</div>
                        <span>{translate("privacypolicy.collectedData.medicalData.list.2")}</span>
                    </div>
                    <div className="privacypolicy__page_list__item">
                        <div className="privacypolicy__page_list__ordinal">(iv)</div>
                        <span>{translate("privacypolicy.collectedData.medicalData.list.3")}</span>
                    </div>
                </div>

                <h5>{translate("privacypolicy.collectedData.companyData.title")}</h5>
                <p>{translate("privacypolicy.collectedData.companyData.content")}</p>

                <h5>{translate("privacypolicy.collectedData.researchData.title")}</h5>
                <p>{translate("privacypolicy.collectedData.researchData.content")}</p>

                <h4>{translate("privacypolicy.purposeOfDataProcessing.title")}</h4>
                <p>{translate("privacypolicy.purposeOfDataProcessing.intro.0")}</p>
                <p>{translate("privacypolicy.purposeOfDataProcessing.intro.1")}</p>

                <h5>{translate("privacypolicy.purposeOfDataProcessing.generalPurposeOfProcessing.title")}</h5>
                <p>{translate("privacypolicy.purposeOfDataProcessing.generalPurposeOfProcessing.content")}</p>

                <h5>{translate("privacypolicy.purposeOfDataProcessing.automaticallyCollectedData.title")}</h5>
                <p>{translate("privacypolicy.purposeOfDataProcessing.automaticallyCollectedData.content")}</p>

                <h5>{translate("privacypolicy.purposeOfDataProcessing.retentionPeriod.title")}</h5>
                <p>{translate("privacypolicy.purposeOfDataProcessing.retentionPeriod.content")}</p>

                <h4>{translate("privacypolicy.rights.title")}</h4>
                <p>{translate("privacypolicy.rights.description")}</p>

                <h5>{translate("privacypolicy.rights.rightsList.access.title")}</h5>
                <p>{translate("privacypolicy.rights.rightsList.access.content")}</p>

                <h5>{translate("privacypolicy.rights.rightsList.rectification.title")}</h5>
                <p>{translate("privacypolicy.rights.rightsList.rectification.content.0")}</p>
                <p>{translate("privacypolicy.rights.rightsList.rectification.content.1")}</p>

                <h5>{translate("privacypolicy.rights.rightsList.restriction.title")}</h5>
                <p>{translate("privacypolicy.rights.rightsList.restriction.content")}</p>

                <h5>{translate("privacypolicy.rights.rightsList.portability.title")}</h5>
                <p>{translate("privacypolicy.rights.rightsList.portability.content")}</p>

                <h5>{translate("privacypolicy.rights.rightsList.forgetfulness.title")}</h5>
                <p>{translate("privacypolicy.rights.rightsList.forgetfulness.content")}</p>

                <h5>{translate("privacypolicy.rights.rightsList.objection.title")}</h5>
                <p>{translate("privacypolicy.rights.rightsList.objection.content")}</p>

                <h4>{translate("privacypolicy.cookies.title")}</h4>
                <p>{translate("privacypolicy.cookies.intro.0")}</p>
                <p>{translate("privacypolicy.cookies.intro.1")}</p>
                <p>{translate("privacypolicy.cookies.intro.2")}</p>
                <p>{translate("privacypolicy.cookies.intro.3")}</p>

                <div className="privacypolicy__page_list">
                    <div className="privacypolicy__page_list__item">
                        <div className="privacypolicy__page_list__ordinal">(i)</div>
                        <span>{translate("privacypolicy.cookies.purpose.authenticationStatus")}</span>
                    </div>
                    <div className="privacypolicy__page_list__item">
                        <div className="privacypolicy__page_list__ordinal">(ii)</div>
                        <span>{translate("privacypolicy.cookies.purpose.personalization")}</span>
                    </div>
                    <div className="privacypolicy__page_list__item">
                        <div className="privacypolicy__page_list__ordinal">(iii)</div>
                        <span>{translate("privacypolicy.cookies.purpose.security")}</span>
                    </div>
                    <div className="privacypolicy__page_list__item">
                        <div className="privacypolicy__page_list__ordinal">(iv)</div>
                        <span>{translate("privacypolicy.cookies.purpose.analysis")}</span>
                    </div>
                </div>

                <h4>{translate("privacypolicy.privacyPolicyChanges.title")}</h4>
                <p>{translate("privacypolicy.privacyPolicyChanges.content")}</p>

                <h4>{translate("privacypolicy.contactDetails.title")}</h4>
                <p>{translate("privacypolicy.contactDetails.content")}</p>
            </Container>
        </div>
    );
};

export default PrivacyPolicy;
