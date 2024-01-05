import React from "react";
import { NumberFormatter, DateFormatter } from "./Formatter";
import { ButtonMuted } from "./Button";
import PropTypes from "prop-types";

// General table head
const TableHead = ({ columns }) => {
    return (
        <thead className="table__general_head">
            <tr className="table__general_item">
                {columns.map(({ label, colSpan }, index) => (
                    <th key={index} className="table__general_item__cell" colSpan={colSpan || 1}>
                        {label}
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
                                    {
                                        // This is to make some keys join together as one td
                                        // Just got this from github
                                        Array.isArray(accessor)
                                            ? accessor.map((subAccessor) => row[subAccessor]).join(" ")
                                            : format
                                                ? format(row[accessor])
                                                : row[accessor]
                                    }
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
            label: "Name",
            accessor: ["firstName", "lastName"]
        },
        {
            label: "Email",
            accessor: "email"
        },
        {
            label: "Phone",
            accessor: "phone"
        },
        {
            label: "Date of Birth",
            accessor: "dateOfBirth",
            format: (date) => DateFormatter.format(new Date(date)) // display DoY nicely
        },
        {
            label: "Address",
            accessor: "address"
        },
        {
            label: "Postal Code",
            accessor: "postalCode"
        },
        {
            label: "Province",
            accessor: "province"
        },
        {
            label: "Country",
            accessor: "country"
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
    // The columns for table company
    const columns = [
        { label: "#", accessor: "id" },
        { label: "KvK", accessor: "kvk" },
        { label: "Company Name", accessor: "name" },
        { label: "Email", accessor: "email" },
        { label: "Phone", accessor: "phone" },
        { label: "Address", accessor: "address" },
        { label: "Postal Code", accessor: "postalCode" },
        { label: "Province", accessor: "province" },
        { label: "Country", accessor: "country" },
        { label: "Contact Person", accessor: "contact" },
        { label: "Website", accessor: "url" }
    ];

    return (
        <div className="table__responsive">
            <table className="table__general table__hover">
                <TableHead columns={columns} />
                <TableBody columns={columns} tableData={data} />
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
    const columns = [
        { label: "#" },
        { label: "Title" },
        { label: "Description" },
        { label: "Date" },
        { label: "Reward" },
        { label: "Category" },
        { label: "Status" },
        { label: "Actions", colSpan: 2 }
    ];

    // some test data
    // will be removed later
    const testData = [
        {
            id: 1,
            title: "Research for my kid",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            date: "2024-02-06",
            reward: 50,
            category: "Some, Random, Text",
            status: "Active"
        },
        {
            id: 2,
            title: "My disabled kid can't be this cute",
            description: "My description",
            date: "2024-02-29",
            reward: 90,
            category: "カラミンゴ",
            status: "Active"
        }
    ];

    return (
        <div className="table__responsive">
            <table className="table__general table__hover">
                <TableHead columns={columns} />
                {
                    /*
                        The body can't be used in the tablebody component
                        because it has the custom ButtonMuted component and it's not optimized to handle it
                        and if I somehow make it work, it's too complicated
                        so I am keeping it this way
                        also still need to loop over the data, for now hard coded data to test
                    */
                }
                <tbody className="table__general_body">
                    {testData.length > 0
                        ? (
                            testData.map((item) => (
                                <tr key={item.id} className="table__general_item">
                                    <td className="table__general_item__cell">{item.id}</td>
                                    <td className="table__general_item__cell">{item.title}</td>
                                    <td className="table__general_item__cell">{item.description}</td>
                                    <td className="table__general_item__cell">{item.date}</td>
                                    <td className="table__general_item__cell">{NumberFormatter.format(item.reward)}</td>
                                    <td className="table__general_item__cell">{item.category}</td>
                                    <td className="table__general_item__cell">{item.status}</td>
                                    <td className="table__general_item__cell" colSpan={2}>
                                        <ButtonMuted text="Edit" />
                                        <ButtonMuted text="Delete" />
                                    </td>
                                </tr>
                            ))
                        )
                        : (
                            <tr className="table__general_item">
                                <td className="table__general_item__cell" colSpan={9}>
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
