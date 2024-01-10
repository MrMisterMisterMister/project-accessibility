import React from "react";
import { useTranslation } from "react-i18next";
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
    // Translation
    const { t: translate } = useTranslation("table");

    return (
        <tbody className="table__general_body">
            {tableData.length > 0
                ? (
                    tableData.map((row, rowIndex) => (
                        <tr key={rowIndex} className="table__general_item">
                            {columns.map(({ accessor, format, actions, colSpan }, colIndex) => (
                                <td key={colIndex} className="table__general_item__cell" colSpan={colSpan || 1}>
                                    {
                                        actions
                                            ? actions(/* need to put in the id here, most likely row */)
                                            : Array.isArray(accessor)
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
                            {translate("noDataAvailable")}
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
            accessor: PropTypes.oneOfType([
                PropTypes.string.isRequired,
                PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
            ]),
            format: PropTypes.func,
            actions: PropTypes.func
        })
    ).isRequired
};

// Table view for panelmembers
// For now it's hard coded, only thing that needs to be changed is adding the props
// Afterwards it's just looping over it and done
const TablePanelMemberView = ({ data }) => {
    // Translation
    const { t: translate } = useTranslation("panelmember");

    // Make array to define the heading and also the accessor for the data
    // Some of these fields are empty, our database needs to be updated to add these columns
    const columns = [
        { label: translate("labels.id"), accessor: "id" },
        { label: translate("labels.name"), accessor: ["firstName", "lastName"] },
        { label: translate("labels.email"), accessor: "email" },
        { label: translate("labels.dateOfBirth"), accessor: "dateOfBirth", format: (date) => DateFormatter.format(new Date(date)) },
        { label: translate("labels.address"), accessor: "address" },
        { label: translate("labels.postalCode"), accessor: "postalCode" },
        { label: translate("labels.city"), accessor: "city" },
        { label: translate("labels.country"), accessor: "country" }
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
    // Translation
    const { t: translate } = useTranslation("company");

    // The columns for table company
    const columns = [
        { label: translate("labels.id"), accessor: "id" },
        { label: translate("labels.kvk"), accessor: "kvk" },
        { label: translate("labels.companyName"), accessor: "companyName" },
        { label: translate("labels.email"), accessor: "email" },
        { label: translate("labels.phone"), accessor: "phone" },
        { label: translate("labels.address"), accessor: "address" },
        { label: translate("labels.postalCode"), accessor: "postalCode" },
        { label: translate("labels.province"), accessor: "province" },
        { label: translate("labels.country"), accessor: "country" },
        { label: translate("labels.contactPerson"), accessor: "contactPerson" },
        { label: translate("labels.websiteUrl"), accessor: "websiteUrl" }
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

// TODO
// still need to be updated. wip
const TablePanelMemberResearchView = () => {
    // columns
    const columns = [
        { label: "#", accessor: "id" },
        { label: "Title", accessor: "title" },
        { label: "Description", accessor: "description" },
        { label: "Date", accessor: "date" },
        { label: "Reward", accessor: "reward", format: (number) => NumberFormatter.format(number) },
        { label: "Category", accessor: "category" },
        { label: "Status", accessor: "status" }
    ];

    // testdata
    const test = [
        {
            id: 42,
            title: "Exploring new horizons",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            date: "2024-03-15",
            reward: 75,
            category: "Adventure, Discovery",
            status: "Inactive"
        },
        {
            id: 2,
            title: "Coding challenge",
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            date: "2024-03-01",
            reward: 120,
            category: "Programming",
            status: "Active"
        },
        {
            id: 9,
            title: "Photography contest",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            date: "2024-03-22",
            reward: 60,
            category: "Photography",
            status: "Active"
        }
    ];

    return (
        <div className="table__responsive">
            <table className="table__general table__hover">
                <TableHead columns={columns} />
                <TableBody columns={columns} tableData={test} />
            </table>
        </div>
    );
};

// TODO
// Same here, needs to be changed to load in all the data
// Just a simply for loop and some conditional checks
// Also the buttons for need onAction
// Will update it later
const TableCompanyResearchView = ({ handleView }) => {
    // columns for the company research view
    const columns = [
        { label: "#", accessor: "id" },
        { label: "Title", accessor: "title" },
        { label: "Description", accessor: "description" },
        { label: "Date", accessor: "date" },
        { label: "Reward", accessor: "reward", format: (number) => NumberFormatter.format(number) },
        { label: "Category", accessor: "category" },
        { label: "Status", accessor: "status" },
        {
            label: "Actions",
            colSpan: 2,
            actions: (/* need to put in the id of research here, so the edit and delete actually works. wip */) => (<>
                <ButtonMuted text="Edit" onAction={() => handleView("editResearch")} />
                <ButtonMuted text="Delete" />
            </>
            )
        }
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
                <TableBody columns={columns} tableData={testData} />
            </table>
        </div>
    );
};

// Prop type for the company table view
TableCompanyResearchView.propTypes = {
    handleView: PropTypes.func
};

// TODO
// view of researches that the panelmember has joined
// will also create a seperate one where the panelmember can see the available researches to join
const TableAvailableResearchView = ({ handleView }) => {
    const columns = [
        { label: "#", accessor: "id" },
        { label: "Title", accessor: "title" },
        { label: "Type", accessor: "type" },
        { label: "Date", accessor: "date" },
        { label: "Reward", accessor: "reward", format: (number) => NumberFormatter.format(number) },
        { label: "Category", accessor: "category" },
        { label: "Organizer", accessor: "organizer" },
        {
            label: "Actions",
            colSpan: 2,
            actions: (/* need to put in the id of research here, so the edit and delete actually works. wip */) => (
                <>
                    <ButtonMuted text="View" onAction={() => handleView("viewResearch")} />
                    <ButtonMuted text="Join" />
                </>
            )
        }
    ];

    const test = [
        {
            id: 1,
            title: "Very special research",
            type: "Online",
            date: "2024-02-06",
            reward: 142440.42,
            category: "Blind, No Legs, No Arms, No Mouth",
            organizer: "Cornhub"
        },
        {
            id: 2,
            title: "Omae Wa Mou",
            date: "2024-09-09",
            type: "Online",
            reward: 5555,
            category: "大",
            organizer: "Stichting Accessibility"
        }
    ];

    return (
        <div className="table__responsive">
            <table className="table__general table__hover">
                <TableHead columns={columns} />
                <TableBody columns={columns} tableData={test} />
            </table>
        </div>
    );
};

TableAvailableResearchView.propTypes = {
    handleView: PropTypes.func
};

export {
    TablePanelMemberView,
    TableCompanyView,
    TablePanelMemberResearchView,
    TableCompanyResearchView,
    TableAvailableResearchView
};
