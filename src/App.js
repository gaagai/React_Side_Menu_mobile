import React, { Component } from 'react';
import ToolBar from './components/ToolBar/ToolBar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/Backdrop/BackDrop';
import './App.css';

class App extends Component {
  state = {
    sideDrawerOpen: false
  }
  drawerToggleClick = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClick = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {

    let backdrop;

    if (this.state.sideDrawerOpen) {

      backdrop = <BackDrop click={this.backdropClick} />
    }
    return (
      <div style={{ height: '100%' }}>
        <ToolBar drawerToggleClick={this.drawerToggleClick} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: '64px' }}>
          <p>This is the page content</p>
        </main>
      </div >
    );
  }
}

export default App;
