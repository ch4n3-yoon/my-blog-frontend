import React from "react"
import styles from "./styles.module.scss"

export const Header = ({title}) => {
  return (
    <div id="header" className={styles.titleWrapper}>
      <div className={styles.title}>
        {title}
      </div>
    </div>
  )
}

export default {
  Header
}
