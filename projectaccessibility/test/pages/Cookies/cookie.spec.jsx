import { describe, test, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Cookies from "../../../src/pages/Cookies";
import { BrowserRouter as Router } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../src/i18n";

describe("Testing the Cookies Page", () => {
    beforeEach(() => {
        i18n.changeLanguage('en');
    });

    const renderComponent = () => {
        render(
            <I18nextProvider i18n={i18n}>
                <Router>
                    <Cookies />
                </Router>
            </I18nextProvider>
        );
    };

    test("renders the page without crashing", () => {
        renderComponent();
        expect(screen.getByRole('main')).toBeDefined();
    });

    // more tests... :)

});
