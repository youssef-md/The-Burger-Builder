import React from 'react'
import styles from './Item.css'
import { NavLink } from 'react-router-dom'

const Item = (props) => (
  <li className = { styles.Item }>
    <NavLink activeClassName = { styles.active } to = { props.link } exact = {props.exact}>
      { props.children }
    </NavLink>
  </li>
);

export default Item;