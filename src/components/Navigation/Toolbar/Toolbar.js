import React from 'react'
import styles from './Toolbar.css'
import Logo from '../../Logo/Logo'
import Items from '../Items/Items'

const Toolbar = (props) => (
  <header className = { styles.Toolbar }>
    <div>MENU</div>
    <div className = { styles.Logo }>
      <Logo/>
    </div>
    <nav>
      <Items />
    </nav>
  </header>
);

export default Toolbar;