import React, { Fragment } from 'react'
import styles from './SideDrawer.css'
import Logo from '../../Logo/Logo'
import Items from '../Items/Items'
import Backdrop from '../../UI/Backdrop/Backdrop'

const SideDrawer = (props) => {

  let classes = [styles.SideDrawer, styles.Close]
  if(props.open)
    classes = [styles.SideDrawer, styles.Open]

  return (
    <Fragment>
      <Backdrop show = { props.open } click = { props.close }/>
      <div className = { classes.join(' ') }>
        <div className = { styles.Logo }>
          <Logo/>
        </div>
        <nav>
          <Items/>
        </nav>
      </div>
    </Fragment>
  )
}

export default SideDrawer