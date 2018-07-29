import React from 'react'
import styles from './Items.css'
import Item from './Item/Item'

const Items = (props) => (
  <ul className = {styles.Items}>
    <Item link = "/" exact = { true }>Burger Builder</Item>
    <Item link = "/orders" >Orders</Item>
  </ul>
);

export default Items;