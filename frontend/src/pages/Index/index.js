import React, { useState } from "react"
import { Container } from "semantic-ui-react"
import { Navigation } from "../../components/Navigation"
import { Header } from "../../components/Header"

import Article from "../../components/Article"

const Index = () => {
  return (
    <Container>
      <Navigation />
      <Header title="# 2020105639 윤석찬" />

      <section>
        <Article.List>
        </Article.List>
      </section>
    </Container>
  )
}

export default Index
