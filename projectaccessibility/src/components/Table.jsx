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
                                            ? actions(row.id)
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
        { label: translate("labels.country"), accessor: "country" },
        { label: translate("labels.disability"), accessor: "disabilitiesName", format: (names) => names.join(", ") } // The default doesn't add space, so need to use format
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

// table view for panel member
// this view has their researches in it
// ye..
const TablePanelMemberResearchView = ({ data, onLeave }) => {
    // Translation
    const { t: translate } = useTranslation("research");

    // columns
    const columns = [
        { label: translate("labels.id"), accessor: "id" },
        { label: translate("labels.title"), accessor: "title" },
        { label: translate("labels.description"), accessor: "description" },
        { label: translate("labels.type"), accessor: "type" },
        { label: translate("labels.date"), accessor: "date", format: (date) => DateFormatter.format(new Date(date)) },
        { label: translate("labels.reward"), accessor: "reward", format: (number) => NumberFormatter.format(number) },
        { label: translate("labels.category"), accessor: "category" },
        { label: translate("labels.organizer"), accessor: "organizerName" },
        { label: translate("labels.actions"), actions: (id) => (<ButtonMuted text={translate("labels.leave")} onAction={() => onLeave(id)} />) }
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

// Prop type for the panelmember research view
TablePanelMemberResearchView.propTypes = {
    data: PropTypes.array.isRequired,
    onLeave: PropTypes.func
};

// Same here, needs to be changed to load in all the data
// Just a simply for loop and some conditional checks
// Also the buttons for need onAction
// Will update it later
const TableCompanyResearchView = ({ data, onEdit, onDelete }) => {
    // Translation
    const { t: translate } = useTranslation("research");

    // columns for the company research view
    const columns = [
        { label: translate("labels.id"), accessor: "id" },
        { label: translate("labels.title"), accessor: "title" },
        { label: translate("labels.description"), accessor: "description" },
        { label: translate("labels.date"), accessor: "date", format: (date) => DateFormatter.format(new Date(date)) },
        { label: translate("labels.type"), accessor: "type" },
        { label: translate("labels.category"), accessor: "category" },
        { label: translate("labels.reward"), accessor: "reward", format: (number) => NumberFormatter.format(number) },
        {
            label: translate("labels.actions"),
            colSpan: 2,
            actions: (id) => (
                <>
                    <ButtonMuted text={translate("labels.edit")} onAction={() => onEdit("editResearch", id)} />
                    <ButtonMuted text={translate("labels.delete")} onAction={() => onDelete(id)} />
                </>
            )
        }
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
TableCompanyResearchView.propTypes = {
    data: PropTypes.array.isRequired,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func
};

// This is for all the researches that an admin can see
const TableAdminResearchView = ({ data }) => {
    // Translation
    const { t: translate } = useTranslation("research");

    // columns
    const columns = [
        { label: translate("labels.id"), accessor: "id" },
        { label: translate("labels.title"), accessor: "title" },
        { label: translate("labels.description"), accessor: "description" },
        { label: translate("labels.date"), accessor: "date", format: (date) => DateFormatter.format(new Date(date)) },
        { label: translate("labels.type"), accessor: "type" },
        { label: translate("labels.category"), accessor: "category" },
        { label: translate("labels.reward"), accessor: "reward", format: (number) => NumberFormatter.format(number) },
        { label: translate("labels.organizer"), accessor: "organizerName" }
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

// Prop type for the admin table view
TableAdminResearchView.propTypes = {
    data: PropTypes.array.isRequired
};

// view of researches that the panelmember has joined
// will also create a seperate one where the panelmember can see the available researches to join
const TableAvailableResearchView = ({ data, onView, onJoin }) => {
    // Translation
    const { t: translate } = useTranslation("research");

    // columns
    const columns = [
        { label: translate("labels.id"), accessor: "id" },
        { label: translate("labels.title"), accessor: "title" },
        { label: translate("labels.date"), accessor: "date", format: (date) => DateFormatter.format(new Date(date)) },
        { label: translate("labels.type"), accessor: "type" },
        { label: translate("labels.category"), accessor: "category" },
        { label: translate("labels.reward"), accessor: "reward", format: (number) => NumberFormatter.format(number) },
        { label: translate("labels.organizer"), accessor: "organizerName" },
        {
            label: translate("labels.actions"),
            colSpan: 2,
            actions: (id) => (
                <>
                    <ButtonMuted text={translate("labels.view")} onAction={() => onView("viewResearch", id)} />
                    <ButtonMuted text={translate("labels.join")} onAction={() => onJoin(id)} />
                </>
            )
        }
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

// prop types table avaialbler researches view
TableAvailableResearchView.propTypes = {
    data: PropTypes.array.isRequired,
    onView: PropTypes.func,
    onJoin: PropTypes.func
};

export {
    TablePanelMemberView,
    TableCompanyView,
    TablePanelMemberResearchView,
    TableCompanyResearchView,
    TableAdminResearchView,
    TableAvailableResearchView
};
