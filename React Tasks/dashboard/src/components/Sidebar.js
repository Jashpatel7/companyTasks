import React from 'react';
import '../assets/css/components/sidebar.css';
import SidebarItem from './SidebarItem';
import { ReactComponent as DashboardIcon } from "../assets/images/svg/dashboard.svg";
import { ReactComponent as ExploreIcon } from "../assets/images/svg/explore.svg";
import { ReactComponent as RoomIcon } from "../assets/images/svg/room.svg";
import { ReactComponent as SocialIcon } from "../assets/images/svg/social.svg";
import { ReactComponent as SettingsIcon } from "../assets/images/svg/settings.svg";
import Logo from "../assets/images/svg/logo-white.svg";
import UserLogo from "../assets/images/placeholder.jpg";


export default function Sidebar(){
    return(
        <aside className="sidebarWrapper py-20 border-round-5 d-inline-block">
            <div className="sidebar d-flex flex-column justify-content-between align-items-center">
                <div className="upperdeck">
                    <div className="logoWrapper pb-20 w-100 d-flex align-items-center justify-content-center flex-column">
                        <img src={Logo} alt="logo"/>
                    </div>
                    <div className="py-25 d-flex align-items-center justify-content-center flex-wrap">
                        <SidebarItem
                            path="/"
                            exact="/"
                            itemName="Dashboard"
                            icon={<DashboardIcon />}
                        />
                        <SidebarItem
                            path="/explore"
                            itemName="Explore"
                            icon={<ExploreIcon />}
                        />
                        <SidebarItem
                            path="/room"
                            itemName="My Room"
                            icon={<RoomIcon />}
                        />
                        <SidebarItem
                            path="/social"
                            itemName="Social"
                            icon={<SocialIcon />}
                        />
                        <SidebarItem
                            path="/settings"
                            itemName="Settings"
                            icon={<SettingsIcon />}
                        />
                    </div>
                </div>
                <div className="lowerdeck">
                    <div className="profileWrapper border-round-20">
                        <img src={UserLogo} alt="user" className="w-100 border-round-20 pb-1"/>
                    </div>
                    <p className="text-white fs-14 text-center mt-1 my-0">Profile</p>
                </div>
            </div>
        </aside>
    );
}