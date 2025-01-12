"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX, useEffect, useState } from "react";
import { ArticleDocument } from "../../../prismicio-types";
import { createClient } from "@/prismicio";
import Card from "@/components/Card";

/**
 * Props for `ArticlesList`.
*/
export type ArticlesListProps = SliceComponentProps<Content.ArticlesListSlice>;

/**
 * Component for "ArticlesList" Slices.
 */
const ArticlesList = ({ slice }: ArticlesListProps): JSX.Element => {
  const [maxArticlesNumber, setMaxArticlesNumber] = useState(1);
  const [articles, setArticles] = useState<ArticleDocument<string>[]>([]);
  
  useEffect(() => {
    const maxArticles = slice.primary.max_articles_number;
    setMaxArticlesNumber(maxArticles as number);

    const fetchArticles = async () => {
      const client = createClient();
      const articles = (await client.getAllByType("article")).reverse();

      if (maxArticlesNumber === 0 || maxArticlesNumber === undefined) {
        setArticles(articles);
        return;
      }
      
      setArticles(articles.slice(0, maxArticlesNumber));
    };

    fetchArticles();
    
  }, [maxArticlesNumber, slice]);

  console.log(articles);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.title_slice} components={{
        heading4: ({ children }) => <h4 className="text-4xl font-bold">{children}</h4>,
      }} />
      <div className="flex flex-wrap gap-4 mt-4 mb-8 justify-start">
        {articles.map((article) => {
          return (
            <Card
              key={article.id}
              imageField={article.data.article_image}
              titleField={article.data.article_title}
              buttonText={slice.primary.button_text}
              link={article.uid}
            />
          );
        })}

      </div>
    </section>
  );
};

export default ArticlesList;
