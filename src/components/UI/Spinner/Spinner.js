import React from 'react'
import styles from './Spinner.css'

const Spinner = () => (
  <div className={styles.lds_ellipsis}><div></div><div></div><div></div><div></div></div>
)

export default Spinner