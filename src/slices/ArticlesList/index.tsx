import { Button } from "@/components/ui/button";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

/**
 * Props for `ArticlesList`.
 */
export type ArticlesListProps = SliceComponentProps<Content.ArticlesListSlice>;

/**
 * Component for "ArticlesList" Slices.
 */
const ArticlesList = async ({ slice }: ArticlesListProps): Promise<JSX.Element> => {
  const client = createClient();
  const articles = await client.getAllByType("articles");

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
    <PrismicRichText field={slice.primary.title_slice} components={{
      heading4: ({ children }) => <h4 className="text-4xl font-bold">{children}</h4>,
    }} />

    {articles.map((article) => (
      <div
          key={article.id}
          className="flex flex-col w-[300px] bg-white shadow-md rounded-lg p-4"
        >
          {/* Image */}
          <PrismicNextImage
            alt=''
            className="w-full h-auto object-cover rounded-t-lg"
            field={article.data.image}
          />

          {/* Title */}
          <PrismicRichText field={article.data.title} components={{
            paragraph: ({ children }) => <p className="mt-4 text-lg font-bold">{children}</p>,
          }} />

          {/* Link */}
          
          <Button className="bg-gray-600" variant="secondary" size="default">
            <PrismicNextLink className="text-white" href={article.url}>
              {slice.primary.button_text}
            </PrismicNextLink>
          </Button>

        </div>
      ))}
    </section>
  );
};

export default ArticlesList;
