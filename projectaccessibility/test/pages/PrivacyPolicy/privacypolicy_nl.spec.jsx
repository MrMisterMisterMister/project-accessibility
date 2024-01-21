import { describe, test, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import PrivacyPolicy from "../../../src/pages/PrivacyPolicy";
import { BrowserRouter as Router } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../src/i18n";

describe("Testing the PrivacyPolicy Page in Dutch", () => {
    beforeEach(() => {
        i18n.changeLanguage("nl");
    });

    test("renders the privacy policy page correctly in Dutch", () => {
        render(
            <I18nextProvider i18n={i18n}>
                <Router>
                    <PrivacyPolicy />
                </Router>
            </I18nextProvider>
        );

        const pageTitleElement = screen.getByTestId("privacypolicy-page-title");
        const actualId = pageTitleElement.getAttribute("id");
        const actualPageTitle = pageTitleElement.textContent;

        const expectedId = "privacypolicy-page-title";
        const expectedPageTitle = "Privacybeleid";

        expect(actualId).toEqual(expectedId);
        expect(actualPageTitle).toEqual(expectedPageTitle);
    });
});
