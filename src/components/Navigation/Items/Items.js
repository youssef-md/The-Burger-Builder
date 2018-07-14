import React from 'react'
import styles from './Items.css'
import Item from './Item/Item'

const Items = (props) => (
  <ul className = {styles.Items}>
    <Item link = "/" active = {true}>Burger Builder</Item>
    <Item link = "/" active ={false}>Checkout</Item>
  </ul>
);

export default Items;