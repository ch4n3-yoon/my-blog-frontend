import React from "react"
import { Link } from "react-router-dom"
import styles from "./styles.module.scss"
import { Container, InnerContainer } from "../Container"

export const Navigation = ({ children }) => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <InnerContainer>
          <div className={styles.row}>
            <div className={styles.navbarLogo}>
              <Link className={styles.link} to="/">
                <h2>BLOG</h2>
              </Link>
            </div>
            <div className={styles.navbarContent}>
              <div className={styles.navbarItem}>
                <Link to="/me" className={styles.link}>
                  About Me
                </Link>
              </div>
              <div className={styles.navbarItem}>
                <Link to="/me" className={styles.link}>
                  Achivements
                </Link>
              </div>
              <div className={styles.navbarItem}>
                <Link to="/me" className={styles.link}>
                  Articles
                </Link>
              </div>
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
