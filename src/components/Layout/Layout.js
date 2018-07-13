import React, { Fragment } from 'react'
import styles from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends React.Component{

  state = {
    showSidedrawer: true,
  }

  render() {
    return (
      <Fragment>
        <Toolbar />
        <SideDrawer 
          open = { this.state.showSidedrawer }
          close = { this.sidedrawerCloseHandler }/>

        <main className = {styles.content}>
          {this.props.children}
        </main>
    
      </Fragment>

    )
  }

  sidedrawerCloseHandler = () => {
    this.setState({showSidedrawer: false})
  }
}

export default Layout