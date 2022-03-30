import React, { createContext, useContext, useEffect, useState } from "react"
import { http, responseHandler } from "../utils/http"

const Context = createContext([])

export const ArticleProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(false)

  const [article, setArticle] = useState(null)
  const [articles, setArticles] = useState(null)

  const fetchAllArticles = () => {
    return new Promise((resolve, reject) => {
      http
        .get(`/article/`)
        .then(responseHandler)
        .then((data) => {
          setStatus(true)
          setArticles(data.data)
          resolve(data.data)
        })
        .catch((data) => {
          setStatus(false)
          reject(data.data)
        })
    })
  }

  const fetchArticleById = ({ articleId }) => {
    return new Promise((resolve, reject) => {
      http
        .get(`/article/${articleId}/`)
        .then(responseHandler)
        .then((data) => {
          setStatus(true)
          setArticle(data.data)
          resolve(data.data)
        })
        .catch((data) => {
          setStatus(false)
          reject(data.data)
        })
    })
  }

  const context = {
    loading,
    status,

    article,
    fetchArticleById,

    articles,
    fetchAllArticles, 
  }

  return <Context.Provider value={context}>{children}</Context.Provider>
}

export const useArticle = () => {
  return useContext(Context)
}

export default {
  useArticle,
  ArticleProvider,
}
