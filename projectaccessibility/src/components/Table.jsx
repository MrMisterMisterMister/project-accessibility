import React from "react";
import { ButtonMuted } from "./Button";

// Table view for panelmembers
// For now it's hard coded, only thing that needs to be changed is adding the props
// Afterwards it's just looping over it and done
const TablePanelMember = () => {
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
                        <th className="table__general_item__cell">Address</th>
                        <th className="table__general_item__cell">Postal Code</th>
                        <th className="table__general_item__cell">City</th>
                        <th className="table__general_item__cell">Province</th>
                        <th className="table__general_item__cell">Country</th>
                    </tr>
                </thead>
                <tbody className="table__general_body">
                    <tr className="table__general_item">
                        <td className="table__general_item__cell">980</td>
                        <td className="table__general_item__cell">Clodsire</td>
                        <td className="table__general_item__cell">clodsire@pokemon.com</td>
                        <td className="table__general_item__cell">123 45 678</td>
                        <td className="table__general_item__cell">Glaseado Mountain</td>
                        <td className="table__general_item__cell">1234 AB</td>
                        <td className="table__general_item__cell">I am the city</td>
                        <td className="table__general_item__cell">Paldea</td>
                        <td className="table__general_item__cell">Clodsire nation</td>
                    </tr>
                    <tr className="table__general_item">
                        <td className="table__general_item__cell">973</td>
                        <td className="table__general_item__cell">Flamigo</td>
                        <td className="table__general_item__cell">flamigo@pokemon.com</td>
                        <td className="table__general_item__cell">987 65 433</td>
                        <td className="table__general_item__cell">My Basement</td>
                        <td className="table__general_item__cell">5432 AB</td>
                        <td className="table__general_item__cell">I am カラミンゴ</td>
                        <td className="table__general_item__cell">Paldea</td>
                        <td className="table__general_item__cell">Water</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

// Same here, needs to be changed to load in all the data
// Just a simply for loop and some conditional checks
// Also the buttons for need onAction
// Will update it later
const TableResearchView = () => {
    // Some formatter function
    const formatter = new Intl.NumberFormat("nl-NL", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: null
    });

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
                        <td className="table__general_item__cell">{formatter.format(50)}</td>
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
                        <td className="table__general_item__cell">{formatter.format(90)}</td>
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

export { TablePanelMember, TableResearchView };
