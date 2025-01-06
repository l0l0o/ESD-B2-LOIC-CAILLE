import { Button } from "@/components/ui/button";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`flex flex-row`}
      style={{ backgroundColor: slice.primary.section_color || undefined }}
    > 
      <PrismicNextImage field={slice.primary.image} alt="" className="w-1/2"/>
      <div className="w-full p-10">
        <div className="mb-4">
          <PrismicRichText field={slice.primary.heading} components={{
            heading4: ({ children }) => <h4 style={{ color: slice.primary.text_color || undefined }} className="text-4xl font-bold">{children}</h4>,
          }} />
          <PrismicRichText field={slice.primary.body} components={{
            paragraph: ({ children }) => <p style={{ color: slice.primary.text_color || undefined }} className="text-lg">{children}</p>,
          }} />
        </div>
        <Button variant="secondary" size="default">
          <PrismicNextLink field={slice.primary.button_link}>
            {slice.primary.button_text}
          </PrismicNextLink>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
