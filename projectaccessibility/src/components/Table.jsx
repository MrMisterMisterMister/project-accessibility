import React from "react";
import { NumberFormatter, DateFormatter } from "./Formatter";
import { ButtonMuted } from "./Button";
import PropTypes from "prop-types";

// General table head
const TableHead = ({ columns }) => {
    return (
        <thead className="table__general_head">
            <tr className="table__general_item">
                {columns.map((column, index) => (
                    <th key={index} className="table__general_item__cell">
                        {column.label}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

// prop type for tableHead
TableHead.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired
        })
    ).isRequired
};

// Some general body view
const TableBody = ({ tableData, columns }) => {
    return (
        <tbody className="table__general_body">
            {tableData.length > 0
                ? (
                    tableData.map((row, rowIndex) => (
                        <tr key={rowIndex} className="table__general_item">
                            {columns.map(({ accessor, format }, colIndex) => (
                                <td key={colIndex} className="table__general_item__cell">
                                    {format ? format(row[accessor]) : row[accessor]}
                                </td>
                            ))}
                        </tr>
                    ))
                )
                : (
                    <tr className="table__general_item">
                        <td className="table__general_item__cell" colSpan={columns.length}>
                            No data available.
                        </td>
                    </tr>
                )
            }
        </tbody>
    );
};

// table body prop type
TableBody.propTypes = {
    tableData: PropTypes.array.isRequired,
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            accessor: PropTypes.string.isRequired,
            format: PropTypes.func
        })
    ).isRequired
};

// Table view for panelmembers
// For now it's hard coded, only thing that needs to be changed is adding the props
// Afterwards it's just looping over it and done
const TablePanelMemberView = ({ data }) => {
    // Make array to define the heading and also the accessor for the data
    // Some of these fields are empty, our database needs to be updated to add these columns
    const columns = [
        {
            label: "#",
            accessor: "id"
        },
        {
            label: "First name",
            accessor: "firstName"
        },
        {
            label: "Last name",
            accessor: "lastName"
        },
        {
            label: "Email",
            accessor: "email"
        },
        {
            label: "Phone",
            accessor: ""
        },
        {
            label: "Date of Birth",
            accessor: "dateOfBirth",
            format: (date) => DateFormatter.format(new Date(date)) // display doy nicely
        },
        {
            label: "Address",
            accessor: ""
        },
        {
            label: "Postal Code",
            accessor: "postalCode"
        },
        {
            label: "Province",
            accessor: ""
        },
        {
            label: "Country",
            accessor: ""
        }
    ];

    // These items need to be looped over
    return (
        <div className="table__responsive">
            <table className="table__general table__hover">
                <TableHead columns={columns} />
                <TableBody columns={columns} tableData={data} />
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
                        ? (
                            data.map((company) => (
                                <tr
                                    className="table__general_item"
                                    key={company.id}
                                >
                                    <td className="table__general_item__cell">
                                        {company.id}
                                    </td>
                                    <td className="table__general_item__cell">
                                        {company.kvk}
                                    </td>
                                    <td className="table__general_item__cell">
                                        {company.name}
                                    </td>
                                    <td className="table__general_item__cell">
                                        {company.email}
                                    </td>
                                    <td className="table__general_item__cell">
                                        {company.phone}
                                    </td>
                                    <td className="table__general_item__cell">
                                        {company.adres}
                                    </td>
                                    <td className="table__general_item__cell">
                                        {company.postalcode}
                                    </td>
                                    <td className="table__general_item__cell">
                                        {company.province}
                                    </td>
                                    <td className="table__general_item__cell">
                                        {company.country}
                                    </td>
                                    <td className="table__general_item__cell">
                                        {company.contact}
                                    </td>
                                    <td className="table__general_item__cell">
                                        {company.url}
                                    </td>
                                </tr>
                            ))
                        )
                        : (
                            <tr className="table__general_item">
                                <td
                                    className="table__general_item__cell"
                                    colSpan={11}
                                >
                                    No data available.
                                </td>
                            </tr>
                        )}
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
                        <th className="table__general_item__cell">
                            Description
                        </th>
                        <th className="table__general_item__cell">Date</th>
                        <th className="table__general_item__cell">Reward</th>
                        <th className="table__general_item__cell">Category</th>
                        <th className="table__general_item__cell">Status</th>
                        <th
                            className="table__general_item__cell"
                            colSpan={2}
                        ></th>
                    </tr>
                </thead>
                <tbody className="table__general_body">
                    <tr className="table__general_item">
                        <td className="table__general_item__cell">1</td>
                        <td className="table__general_item__cell">
                            Research for my kid
                        </td>
                        <td className="table__general_item__cell">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </td>
                        <td className="table__general_item__cell">
                            07-01-2024
                        </td>
                        <td className="table__general_item__cell">
                            {NumberFormatter.format(50)}
                        </td>
                        <td className="table__general_item__cell">
                            Some, Random, Text
                        </td>
                        <td className="table__general_item__cell">Active</td>
                        <td className="table__general_item__cell" colSpan={2}>
                            <ButtonMuted text="Edit" />
                            <ButtonMuted text="Delete" />
                        </td>
                    </tr>
                    <tr className="table__general_item">
                        <td className="table__general_item__cell">2</td>
                        <td className="table__general_item__cell">
                            My disabled kid can&apos;t be this cute
                        </td>
                        <td className="table__general_item__cell">
                            My description
                        </td>
                        <td className="table__general_item__cell">
                            28-02-2024
                        </td>
                        <td className="table__general_item__cell">
                            {NumberFormatter.format(90)}
                        </td>
                        <td className="table__general_item__cell">
                            カラミンゴ
                        </td>
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
    return <p>Your mom</p>;
};

export {
    TablePanelMemberView,
    TableCompanyView,
    TableCompanyResearchView,
    TablePanelMemberResearchView
};
