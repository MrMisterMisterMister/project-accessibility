import React from "react";
import { NumberFormatter, DateFormatter } from "./Formatter";
import { ButtonMuted } from "./Button";
import PropTypes from "prop-types";

// Table view for panelmembers
// For now it's hard coded, only thing that needs to be changed is adding the props
// Afterwards it's just looping over it and done
const TablePanelMemberView = ({ data }) => {
    // These items need to be looped over
    return (
        <div className="table__responsive">
            <table className="table__general table__hover">
                <thead className="table__general_head">
                    <tr className="table__general_item">
                        <th className="table__general_item__cell">#</th>
                        <th className="table__general_item__cell">Name</th>
                        <th className="table__general_item__cell">Email</th>
                        <th className="table__general_item__cell">Phone</th>
                        <th className="table__general_item__cell">Date of Birth</th>
                        <th className="table__general_item__cell">Address</th>
                        <th className="table__general_item__cell">Postal Code</th>
                        <th className="table__general_item__cell">Province</th>
                        <th className="table__general_item__cell">Country</th>
                    </tr>
                </thead>
                <tbody className="table__general_body">
                    {data.length > 0
                        ? data.map((panelmember) => (
                            <tr className="table__general_item" key={panelmember.id}>
                                <td className="table__general_item__cell">{panelmember.id}</td>
                                <td className="table__general_item__cell">{panelmember.firstName} {panelmember.lastName}</td>
                                <td className="table__general_item__cell">{panelmember.email}</td>
                                <td className="table__general_item__cell">{panelmember.phone}</td>
                                <td className="table__general_item__cell">{DateFormatter.format(new Date(panelmember.dateOfBirth))}</td>
                                <td className="table__general_item__cell">{panelmember.adres}</td>
                                <td className="table__general_item__cell">{panelmember.zipcode}</td>
                                <td className="table__general_item__cell">{panelmember.province}</td>
                                <td className="table__general_item__cell">{panelmember.country}</td>
                            </tr>
                        ))
                        : (
                            <tr className="table__general_item">
                                <td className="table__general_item__cell" colSpan="9">
                                    No data available.
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

// Prop type for the panelmember table view
TablePanelMemberView.propTypes = {
    data: PropTypes.array.isRequired
};

// Needs to be looped over with the data from get to companies
// I am very lazy to do it, so someone else do it
const TableCompanyView = ({ data }) => {
    return (
        <div className="table__responsive">
            <table className="table__general table__hover">
                <thead className="table__general_head">
                    <tr className="table__general_item">
                        <th className="table__general_item__cell">#</th>
                        <th className="table__general_item__cell">KvK</th>
                        <th className="table__general_item__cell">Company Name</th>
                        <th className="table__general_item__cell">Email</th>
                        <th className="table__general_item__cell">Phone</th>
                        <th className="table__general_item__cell">Address</th>
                        <th className="table__general_item__cell">Postal Code</th>
                        <th className="table__general_item__cell">Province</th>
                        <th className="table__general_item__cell">Country</th>
                        <th className="table__general_item__cell">Contact Person</th>
                        <th className="table__general_item__cell">Website</th>
                    </tr>
                </thead>
                <tbody className="table__general_body">
                    {data.length > 0
                        ? data.map((company) => (
                            <tr className="table__general_item" key={company.id}>
                                <td className="table__general_item__cell">{company.id}</td>
                                <td className="table__general_item__cell">{company.kvk}</td>
                                <td className="table__general_item__cell">{company.name}</td>
                                <td className="table__general_item__cell">{company.email}</td>
                                <td className="table__general_item__cell">{company.phone}</td>
                                <td className="table__general_item__cell">{company.adres}</td>
                                <td className="table__general_item__cell">{company.postalcode}</td>
                                <td className="table__general_item__cell">{company.province}</td>
                                <td className="table__general_item__cell">{company.country}</td>
                                <td className="table__general_item__cell">{company.contact}</td>
                                <td className="table__general_item__cell">{company.url}</td>
                            </tr>
                        ))
                        : (
                            <tr className="table__general_item">
                                <td className="table__general_item__cell" colSpan="11">
                                    No data available.
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

// Prop type for the company table view
TableCompanyView.propTypes = {
    data: PropTypes.array.isRequired
};

// Same here, needs to be changed to load in all the data
// Just a simply for loop and some conditional checks
// Also the buttons for need onAction
// Will update it later
const TableCompanyResearchView = () => {
    return (
        <div className="table__responsive">
            <table className="table__general table__hover">
                <thead className="table__general_head">
                    <tr className="table__general_item">
                        <th className="table__general_item__cell">#</th>
                        <th className="table__general_item__cell">Title</th>
                        <th className="table__general_item__cell">Description</th>
                        <th className="table__general_item__cell">Date</th>
                        <th className="table__general_item__cell">Reward</th>
                        <th className="table__general_item__cell">Category</th>
                        <th className="table__general_item__cell">Status</th>
                        <th className="table__general_item__cell" colSpan={2}></th>
                    </tr>
                </thead>
                <tbody className="table__general_body">
                    <tr className="table__general_item">
                        <td className="table__general_item__cell">1</td>
                        <td className="table__general_item__cell">Research for my kid</td>
                        <td className="table__general_item__cell">Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                        <td className="table__general_item__cell">07-01-2024</td>
                        <td className="table__general_item__cell">{NumberFormatter.format(50)}</td>
                        <td className="table__general_item__cell">Some, Random, Text</td>
                        <td className="table__general_item__cell">Active</td>
                        <td className="table__general_item__cell" colSpan={2}>
                            <ButtonMuted text="Edit" />
                            <ButtonMuted text="Delete" />
                        </td>
                    </tr>
                    <tr className="table__general_item">
                        <td className="table__general_item__cell">2</td>
                        <td className="table__general_item__cell">My disabled kid can&apos;t be this cute</td>
                        <td className="table__general_item__cell">My description</td>
                        <td className="table__general_item__cell">28-02-2024</td>
                        <td className="table__general_item__cell">{NumberFormatter.format(90)}</td>
                        <td className="table__general_item__cell">カラミンゴ</td>
                        <td className="table__general_item__cell">Active</td>
                        <td className="table__general_item__cell" colSpan={2}>
                            <ButtonMuted text="Edit" />
                            <ButtonMuted text="Delete" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

// view of researches that the panelmember has joined
// will also create a seperate one where the panelmember can see the available researches to join
const TablePanelMemberResearchView = () => {
    return (
        <p>Your mom</p>
    );
};

export {
    TablePanelMemberView,
    TableCompanyView,
    TableCompanyResearchView,
    TablePanelMemberResearchView
};
