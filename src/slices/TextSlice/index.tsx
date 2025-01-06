import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.TextSliceSlice>;

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
      <PrismicNextImage field={slice.primary.halfscreen_image} alt="" className="w-1/2"/>
      <div className="w-full p-10">
        <div className="mb-4">
          <PrismicRichText field={slice.primary.title} components={{
            heading4: ({ children }) => <h4 style={{ color: slice.primary.text_color || undefined }} className="text-4xl font-bold">{children}</h4>,
          }} />
          <PrismicRichText field={slice.primary.text_content} components={{
            paragraph: ({ children }) => <p style={{ color: slice.primary.text_color || undefined }} className="text-lg">{children}</p>,
          }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
