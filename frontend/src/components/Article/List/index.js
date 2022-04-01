import React from "react"
import { Link } from "react-router-dom"

import { ArticleProvider, useArticle } from "../../../contexts/useArticle"
import { Container, InnerContainer } from "../../Container"
import styles from "./styles.module.scss"

export const Item = (props) => {
  const { id, category, title, short, createAt } = props

  return (
    <li className={styles.li}>
      <Link to={`/article/${id}`} className={styles.link}>
        <div className={styles.innerLink}>
          <span className={styles.category}>{category}</span>
          <h4 className={styles.title}>{title}</h4>
          <div className={styles.short}>{short}</div>
          <time className={styles.createAt}>{createAt}</time>
        </div>
      </Link>
    </li>
  )
}

export const List = ({ children }) => {

  const article = useArticle()

  if (article.articles === null) return <div>Loading...</div>
  return (
    <div className={styles.padding}>
      <Container>
        <InnerContainer>
          <ul>
            {article?.articles?.map(article => {
              return (
                <Item
                  id={article.id}
                  category={article.category || "카테고리"}
                  title={article.title}
                  short={article.content}
                  createAt={article.createdAt}
                />
              )
            })}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_) => {
              return (
                <Item
                  category="카테고리"
                  title="이야기를 담아내는 사람들, 커뮤니케이션팀이 말하다"
                  short="언론 PR부터 기업 채널 운영까지 다양한 업무를 하고 있는 커뮤니케이션팀은 어떻게 일하고 있으며, 기업 커뮤니케이션의 역할에 대해 어떤 생각을 가지고 있을까요?"
                  createAt="2020.02.20."
                />
              )
            })}
          </ul>
        </InnerContainer>
      </Container>
    </div>
  )
}

export default {
  List,
}
