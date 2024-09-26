import React from 'react';
import '../assets/css/components/midbar.css';
import {
    Button,
    List
} from 'reactstrap';
import ListImage from "../assets/images/midbar-item.jpg";
import {
    ReactComponent as SearchIcon
} from "../assets/images/svg/search-white.svg";
import {
    ReactComponent as DesktopIcon
} from "../assets/images/svg/desktop-icon.svg";
import {
    ReactComponent as MobileIcon
} from "../assets/images/svg/phone-icon.svg";
import {
    ReactComponent as UserIcon
} from "../assets/images/svg/user-icon.svg";
import styled from 'styled-components';

const Badge = styled.div `
    background-color: ${props => props.green ? "#18393a" : props.red ? "#bf2f2f" : "#694df3"};
    border-color: ${props => props.greenborder ? "#20ffb2" : props.redborder ? "#ac5b5b" : "#b2b2fe"};
    box-shadow: ${props => props.greenShadow ? "0 3px 3.5px rgb(32 255 178 / 20%)" : props.redShadow ? "0 3px 3.5px rgb(255 0 0 / 40%)" : "0 3px 3.5px rgb(13 19 255 / 64%)"};
    color: #fff;
    border-radius: 4px;
    border-width:1px;
    border-style: solid;
    display:inline-block;
    padding:2px 8px;
`;


export default function Midbar() {
    return ( <
        div className = "midbarContainer text-white mx-3 d-inline-block" > {
            /* <div className="miidbar"></div> */ } <
        div className = "search-input-wrapper position-relative mb-15" >
        <
        input placeholder = "Search"
        type = "text"
        class = "search-input font-14 form-control w-100" / >
        <
        i class = "searchIconWrapper position-absolute" > < SearchIcon / > < /i> <
        /div> <
        div className = "midbarHeading d-flex justify-content-between mb-15" >
        <
        p className = "text-white fs-20 m-0" > Explore < /p> <
        Button className = "roundIconButton" > < /Button> <
        /div> <
        List className = "cardsContainer"
        type = "unstyled" >
        <
        li className = "midbarItem d-flex" >
        <
        div className = "imgWrapper" >
        <
        img src = {
            ListImage
        }
        alt = "list" / >
        <
        /div> <
        div className = "contentWrapper" >
        <
        p className = "fs-14 text-white fw-700 mb-1" > Assassin 's Creed</p> <
        p className = "fs-12 text-white mb-1" > Galaxy Entertainment Ltd. < /p> <
        Badge className = "fs-12 mb-2" > Game < /Badge> <
        div className = "iconsWrapper d-flex" >
        <
        div className = "userType" >
        <
        UserIcon / >
        <
        /div> <
        div className = "deviceType" >
        <
        DesktopIcon / >
        <
        MobileIcon / >
        <
        /div> <
        /div> <
        /div> <
        /li> <
        li className = "midbarItem d-flex" >
        <
        div className = "imgWrapper" >
        <
        img src = {
            ListImage
        }
        alt = "list" / >
        <
        /div> <
        div className = "contentWrapper" >
        <
        p className = "fs-14 text-white fw-700 mb-1" > Assassin 's Creed</p> <
        p className = "fs-12 text-white mb-1" > Galaxy Entertainment Ltd. < /p> <
        Badge green greenborder greenShadow className = "fs-12 mb-2" > Game < /Badge> <
        div className = "iconsWrapper d-flex" >
        <
        div className = "userType" >
        <
        UserIcon / >
        <
        /div> <
        div className = "deviceType" >
        <
        DesktopIcon / >
        <
        MobileIcon / >
        <
        /div> <
        /div> <
        /div> <
        /li> <
        li className = "midbarItem d-flex" >
        <
        div className = "imgWrapper" >
        <
        img src = {
            ListImage
        }
        alt = "list" / >
        <
        /div> <
        div className = "contentWrapper" >
        <
        p className = "fs-14 text-white fw-700 mb-1" > Assassin 's Creed</p> <
        p className = "fs-12 text-white mb-1" > Galaxy Entertainment Ltd. < /p> <
        Badge red redborder redShadow className = "fs-12 mb-2" > Game < /Badge> <
        div className = "iconsWrapper d-flex" >
        <
        div className = "userType" >
        <
        UserIcon / >
        <
        /div> <
        div className = "deviceType" >
        <
        DesktopIcon / >
        <
        MobileIcon / >
        <
        /div> <
        /div> <
        /div> <
        /li> <
        li className = "midbarItem d-flex" >
        <
        div className = "imgWrapper" >
        <
        img src = {
            ListImage
        }
        alt = "list" / >
        <
        /div> <
        div className = "contentWrapper" >
        <
        p className = "fs-14 text-white fw-700 mb-1" > Assassin 's Creed</p> <
        p className = "fs-12 text-white mb-1" > Galaxy Entertainment Ltd. < /p> <
        Badge green greenborder greenShadow className = "fs-12 mb-2" > Game < /Badge> <
        div className = "iconsWrapper d-flex" >
        <
        div className = "userType" >
        <
        UserIcon / >
        <
        /div> <
        div className = "deviceType" >
        <
        DesktopIcon / >
        <
        MobileIcon / >
        <
        /div> <
        /div> <
        /div> <
        /li> <
        li className = "midbarItem d-flex" >
        <
        div className = "imgWrapper" >
        <
        img src = {
            ListImage
        }
        alt = "list" / >
        <
        /div> <
        div className = "contentWrapper" >
        <
        p className = "fs-14 text-white fw-700 mb-1" > Assassin 's Creed</p> <
        p className = "fs-12 text-white mb-1" > Galaxy Entertainment Ltd. < /p> <
        Badge className = "fs-12 mb-2" > Game < /Badge> <
        div className = "iconsWrapper d-flex" >
        <
        div className = "userType" >
        <
        UserIcon / >
        <
        /div> <
        div className = "deviceType" >
        <
        DesktopIcon / >
        <
        MobileIcon / >
        <
        /div> <
        /div> <
        /div> <
        /li>

        <
        /List> <
        /div>
    );
}