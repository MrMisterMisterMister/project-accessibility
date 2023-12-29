import React from "react";
import { FormEmail, FormPassword } from "./Form";

// Settings component
const SettingsPanelmember = () => {
    return (
        <section className="dashboard_section__wrapper">
            <div className="dashboard_section__header">
                <h1 className="dashboard_section__heading">Change Your Information</h1>
            </div>
            <div className="dashboard_section__content">
                <form acceptCharset="UTF-8" method="post">
                    <div className="dashboard_section__inner">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <label className="label">First Name</label>
                                <input className="form__text_field" type="text" name="" value="" placeholder="John" />
                            </div>
                            <div className="col-12 col-md-6">
                                <label className="label">Last Name</label>
                                <input className="form__text_field" type="text" name="" value="" placeholder="Doe" />
                            </div>
                            <div className="col-12">
                                <label className="label">Phone Number</label>
                                <input className="form__text_field" type="phone" name="" value="" placeholder="Your Phone" />
                            </div>
                            <div className="col-12">
                                <label className="label">Address</label>
                                <input className="form__text_field" type="text" name="" value="" placeholder="Your Address" />
                            </div>
                            <div className="col-12">
                                <label className="label">City</label>
                                <input className="form__text_field" type="text" name="" value="" placeholder="Your City" />
                            </div>
                            <div className="col-12">
                                <label className="label">Province</label>
                                <input className="form__text_field" type="text" name="" value="" placeholder="Your Province" />
                            </div>
                            <div className="col-12 col-md-6">
                                <label className="label">Postal Code</label>
                                <input className="form__text_field" type="text" name="" value="" placeholder="Your Postal code" />
                            </div>
                            <div className="col-12 col-md-6">
                                <label className="label">Country</label>
                                <select className="form__select_menu" name="">
                                    <option selected value="The Netherlands">The Netherlands</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <input className="button button__settings_update" type="submit" value="Update Info" />
                </form>
            </div>
        </section>
    );
};

const SettingsEmail = () => {
    return (
        <section className="dashboard_section__wrapper">
            <div className="dashboard_section__header">
                <h1 className="dashboard_section__heading">Change Your Email</h1>
            </div>
            <div className="dashboard_section__content">
                <FormEmail />
            </div>
        </section>
    );
};

const SettingsPassword = () => {
    return (
        <section className="settings__section dashboard_section__wrapper">
            {/* <h2 className="settings__section_title"></h2> */}
            <div className="dashboard_section__header">
                <h1 className="dashboard_section__heading">Change Your Password</h1>
            </div>
            <div className="settings__section_content dashboard_section__content">
                <FormPassword />
            </div>
        </section>
    );
};

export { SettingsPanelmember, SettingsEmail, SettingsPassword };
