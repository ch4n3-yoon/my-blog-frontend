import React from "react"
import styles from "./styles.module.scss"
import { Container, InnerContainer } from "../Container"

export const Navigation = ({ children }) => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <InnerContainer>
          <div className={styles.row}>
            <div className={styles.navbarLogo}>BLOG</div>
            <div className={styles.navbarContent}>
              <div className={styles.navbarItem}>About Me</div>
              <div className={styles.navbarItem}>Achivements</div>
              <div className={styles.navbarItem}>Articles</div>
            </div>
          </div>
        </InnerContainer>
      </Container>
    </nav>
  )
}

export default {
  Navigation,
}
