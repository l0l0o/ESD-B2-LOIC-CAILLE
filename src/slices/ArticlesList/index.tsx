"use client";

import { Button } from "@/components/ui/button";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX, useEffect, useState } from "react";
import { ArticlesDocument } from "../../../prismicio-types";
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
  const [articles, setArticles] = useState<ArticlesDocument<string>[]>([]);
  
  useEffect(() => {
      const fetchArticles = async () => {
        const client = createClient();
        const articles = await client.getAllByType("articles");
        setArticles(articles);
      };

      const maxArticles = slice.primary.max_articles_number;
      setMaxArticlesNumber(maxArticles as number);

      fetchArticles();
    }, [slice, setArticles]);
    
  const recentArticles = articles.slice(0, maxArticlesNumber);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.title_slice} components={{
        heading4: ({ children }) => <h4 className="text-4xl font-bold">{children}</h4>,
      }} />
      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        {recentArticles.map((article) => {
          return (
            <Card
              key={article.id}
              imageField={article.data.image}
              titleField={article.data.title}
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
