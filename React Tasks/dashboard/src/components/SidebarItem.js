import React from 'react';
import { NavLink } from "react-router-dom";

export default function SidebarItem({ path, itemName, icon, exact }){
    return(
        <NavLink
        className="item d-flex flex-column align-items-center justify-content-center position-relative text-decoration-none mb-20"
        activeClassName="itemActive d-flex flex-column align-items-center justify-content-center position-relative text-decoration-none mb-20"
        to={path}
        exact={exact}
        >
            <div className="iconWrap">
                <i className="sidebarIcon">{icon}</i>
            </div>
            <p className="itemName">{itemName}</p>
        </NavLink>
    );
}