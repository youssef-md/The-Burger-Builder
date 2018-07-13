import React from 'react'
import styles from './MenuButton.css'

const MenuButton = (props) => (
  <div className = { styles.MenuButton } onClick = { props.click }>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default MenuButton;