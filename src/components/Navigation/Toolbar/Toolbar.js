import React from 'react'
import styles from './Toolbar.css'
import Logo from '../../Logo/Logo'
import Items from '../Items/Items'
import MenuButton from './MenuButton/MenuButton'

const Toolbar = (props) => (
  <header className = { styles.Toolbar }>
    <MenuButton click = { props.toggleSidedrawer }/>
    <div className = { styles.Logo }>
      <Logo/>
    </div>
    <nav className = {styles.DesktopOnly}>
      <Items />
    </nav>
  </header>
);

export default Toolbar;