import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchArticles = () => API.get("/articles");
export const fetchArticleBySlug = (slug) => API.get(`/articles/slug/${slug}`);
export const createArticle = (data) => API.post("/article", data);
