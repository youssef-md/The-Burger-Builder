import React, { Fragment } from 'react'
import styles from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends React.Component{

  state = {
    showSidedrawer: false,
  }

  render() {
    return (
      <Fragment>
        <Toolbar toggleSidedrawer = { this.toggleSidedrawer }/>
        <SideDrawer 
          show = { this.state.showSidedrawer }
          close = { this.sidedrawerCloseHandler }/>

        <main className = {styles.content}>
          {this.props.children}
        </main>
      </Fragment>

    )
  }

  toggleSidedrawer = () => {
    this.setState((prevState) => {
      return { showSidedrawer: !prevState.showSidedrawer}
    })
  }

  sidedrawerCloseHandler = () => {
    this.setState({showSidedrawer: false})
  }
}

export default Layout