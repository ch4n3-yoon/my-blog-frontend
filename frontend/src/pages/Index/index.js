import React, { useState, useEffect } from "react"
import { Container } from "semantic-ui-react"

// contexts
import { ArticleProvider, useArticle } from "../../contexts/useArticle"

// components
import { Navigation } from "../../components/Navigation"
import { Header } from "../../components/Header"
import Article from "../../components/Article"

const Index = () => {
  const article = useArticle()

  useEffect(() => {
    article.fetchAllArticles()
  }, [])

  return (
    <Container>
      <Navigation />
      <Header title="# 2020105639 윤석찬" />
      <section>
        <Article.List></Article.List>
      </section>
    </Container>
  )
}

const WrappedIndex = () => {
  return (
    <ArticleProvider>
      <Index />
    </ArticleProvider>
  )
}

export default WrappedIndex
