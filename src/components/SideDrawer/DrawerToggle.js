import React from 'react';
import './Drawer.css';

const DrawerToggle = (props) => {
    return (
        <button className="toggle-button" onClick={props.click}>
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />
        </button>

    );
};

export default DrawerToggle;