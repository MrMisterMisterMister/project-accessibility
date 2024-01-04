import React from "react";

// Table view for panelmembers
// For now it's hard coded, only thing that needs to be changed is adding the props
// Afterwards it's just looping over it and done
const TablePanelMember = () => {
    // These items need to be looped over
    return (
        <div className="table__responsive">
            <table className="table__panelmember table__hover">
                <thead className="table__panelmember_head">
                    <tr className="table__panelmember_item">
                        <th className="table__panelmember_item__cell">#</th>
                        <th className="table__panelmember_item__cell">Name</th>
                        <th className="table__panelmember_item__cell">Email</th>
                        <th className="table__panelmember_item__cell">Phone</th>
                        <th className="table__panelmember_item__cell">Address</th>
                        <th className="table__panelmember_item__cell">Postal Code</th>
                        <th className="table__panelmember_item__cell">City</th>
                        <th className="table__panelmember_item__cell">Province</th>
                        <th className="table__panelmember_item__cell">Country</th>
                    </tr>
                </thead>
                <tbody className="table__panelmember_body">
                    <tr className="table__panelmember_item">
                        <td className="table__panelmember_item__cell">980</td>
                        <td className="table__panelmember_item__cell">Clodsire</td>
                        <td className="table__panelmember_item__cell">clodsire@pokemon.com</td>
                        <td className="table__panelmember_item__cell">123 45 678</td>
                        <td className="table__panelmember_item__cell">Glaseado Mountain</td>
                        <td className="table__panelmember_item__cell">1234 AB</td>
                        <td className="table__panelmember_item__cell">I am the city</td>
                        <td className="table__panelmember_item__cell">Paldea</td>
                        <td className="table__panelmember_item__cell">Clodsire nation</td>
                    </tr>
                    <tr className="table__panelmember_item">
                        <td className="table__panelmember_item__cell">973</td>
                        <td className="table__panelmember_item__cell">Flamigo</td>
                        <td className="table__panelmember_item__cell">flamigo@pokemon.com</td>
                        <td className="table__panelmember_item__cell">987 65 433</td>
                        <td className="table__panelmember_item__cell">My Basement</td>
                        <td className="table__panelmember_item__cell">5432 AB</td>
                        <td className="table__panelmember_item__cell">I am カラミンゴ</td>
                        <td className="table__panelmember_item__cell">Paldea</td>
                        <td className="table__panelmember_item__cell">Water</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export { TablePanelMember };
