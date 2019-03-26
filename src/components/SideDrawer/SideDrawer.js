import React from 'react';
import './Drawer.css';

const SideDrawer = (props) => {

    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Main Page</a></li>
                <li><a href="/">Other Page</a></li>
            </ul>
        </nav>
    );
};

export default SideDrawer;