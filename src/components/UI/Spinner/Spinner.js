import React from 'react'
import styles from 'Spinner.css'

const Spinner = () => (
  <div className={styles.lds_roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
)

export default Spinner