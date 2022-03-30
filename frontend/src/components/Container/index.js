import React from "react"
import styles from "./styles.module.scss"

export const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export const InnerContainer = ({ children }) => {
  return <div className={styles.InnerContainer}>{children}</div>
}

export default {
  Container,
  InnerContainer,
}
