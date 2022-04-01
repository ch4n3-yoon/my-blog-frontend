import React, { useEffect } from "react"
import { useArticle } from "../../../contexts/useArticle"

export const Detail = () => {
  const article = useArticle()

  if (article.article === null) <div>loading...</div>
  return (
    <div>
      <h1>{article.article?.title}</h1>
      <hr/>
      <div>{article.article?.content}</div>
    </div>
  )
}

export default { Detail }
