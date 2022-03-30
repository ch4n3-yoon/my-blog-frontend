import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Container } from "semantic-ui-react"

// contexts
import { ArticleProvider, useArticle } from "../../contexts/useArticle"

// components
import { Navigation } from "../../components/Navigation"
import Article from "../../components/Article"

import styles from "./styles.module.scss"

const Header = ({ content, createdAt }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{content}</h1>
      <time className={styles.createdAt}>{createdAt}</time>
    </header>
  )
}

export const Detail = () => {
  const { articleId } = useParams()
  const article = useArticle()

  useEffect(() => {
    if (!articleId) return
    if (article.article !== null) return

    article.fetchArticleById({ articleId })
  }, [articleId, article])

  if (article.article === null) return <div>loading...</div>
  return (
    <Container>
      <Navigation />
      <Header content={article.article.title} createdAt={article.article?.createdAt}/>
      {/* <Header title="# 2020105639 윤석찬" /> */}
      <section className={styles.content}>
        <Article.Detail />
      </section>
    </Container>
  )
}

const WrappedDetail = () => {
  return (
    <ArticleProvider>
      <Detail />
    </ArticleProvider>
  )
}

export default WrappedDetail
