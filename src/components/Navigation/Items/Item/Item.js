import React from 'react'
import styles from './Item.css'

const Item = (props) => (
  <li className = { styles.Item }>
    <a href = { props.link } className = {props.active ? styles.active : null}>
      { props.children }
    </a>
  </li>
);

export default Item;