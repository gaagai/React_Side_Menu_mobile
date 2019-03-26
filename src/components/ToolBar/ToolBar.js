import React from 'react';
import DrawerToggle from '../SideDrawer/DrawerToggle';
import './ToolsBar.css';
const ToolBar = (props) => {
    return (
        <header className="toolbar">
            <nav className="toolbar__navigation">
                <div className="toolbar__toggle"><DrawerToggle click={props.drawerToggleClick} /></div>
                <div className="toolbar__logo"><a href='/'>The Logo</a></div>
                <div className="spacer" />
                <div className="toolbar__navigation-items">
                    <ul>

                        <li><a href="/login">LogIn</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default ToolBar;