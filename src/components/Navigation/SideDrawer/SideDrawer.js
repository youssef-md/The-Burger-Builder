import React from 'react'
import styles from './SideDrawer.css'
import Logo from '../../Logo/Logo'
import Items from '../Items/Items'

const SideDrawer = (props) => {

  return (
    <div className = {styles.SideDrawer}>
      <Logo/>
      <nav>
        <Items/>
      </nav>
    </div>
  )
}

export default SideDrawer