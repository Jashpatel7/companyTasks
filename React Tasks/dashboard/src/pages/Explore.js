import React from 'react';
import Main from '../components/Main';
import Midbar from '../components/Midbar';
import Sidebar from '../components/Sidebar';

export default function Explore(){
    return(
        <div className="pageContainer d-flex">
            <Sidebar/>
            <Midbar/>
            <Main/>
        </div>
    );
}