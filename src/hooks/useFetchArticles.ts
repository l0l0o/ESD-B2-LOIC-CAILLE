import { createClient } from "@/prismicio";
import { useEffect, useState } from "react";
import { ArticlesDocument } from "../../prismicio-types";

const useFetchArticles = () => {
  const [articles, setArticles] = useState<ArticlesDocument<string>[]>([]);
  useEffect(() => {
    const fetchArticles = async () => {
      const client = createClient();
      const articles = await client.getAllByType("articles");
      setArticles(articles);
    };

    fetchArticles();
  }, []);

  return articles;
};

export default useFetchArticles;
