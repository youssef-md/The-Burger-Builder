import React, { Fragment } from 'react'
import styles from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const Layout = (props) => (
  <Fragment>
    <Toolbar/>
    <SideDrawer/>
    <main className = {styles.content}>
      {props.children}
    </main>

  </Fragment>
)

export default Layout