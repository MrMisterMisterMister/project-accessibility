import { describe, test, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import PrivacyPolicy from "../../../src/pages/PrivacyPolicy";
import { BrowserRouter as Router } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../src/i18n";

describe("Testing the PrivacyPolicy Page in English", () => {
    beforeEach(() => {
        i18n.changeLanguage('en');
    });

    test("renders the privacy policy page correctly in English", () => {
        render(
            <I18nextProvider i18n={i18n}>
                <Router>
                    <PrivacyPolicy />
                </Router>
            </I18nextProvider>
        );

        const pageTitleElement = screen.getByTestId('test-page-title');
        const actualId = pageTitleElement.getAttribute('id');
        const actualPageTitle = pageTitleElement.textContent;

        const expectedId = 'test-page-title';
        const expectedPageTitle = 'Privacy Policy';

        expect(actualId).toEqual(expectedId);
        expect(actualPageTitle).toEqual(expectedPageTitle);
    });
});
