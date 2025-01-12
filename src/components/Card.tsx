import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Button } from "./ui/button";
import { ImageFieldImage, KeyTextField, RichTextField } from "@prismicio/client";

type CardProps = {
    imageField: ImageFieldImage | null | undefined;
    titleField: RichTextField | null | undefined;
    buttonText: KeyTextField;
    link: string;
};

const Card = ( {imageField, titleField, buttonText, link}: CardProps ) => {
    return ( 
        <div
          className="flex flex-col w-[300px] bg-white shadow-md rounded-lg p-4"
        >
              {/* Image */}
              <PrismicNextImage
                alt=''
                className="w-full h-auto object-cover rounded-t-lg"
                field={imageField}
              />

              {/* Title */}
              <PrismicRichText field={titleField} components={{
                paragraph: ({ children }) => <p className="mt-4 text-lg font-bold">{children}</p>,
              }} />

              {/* Link */}
                <a href={link} className="w-full">
                  <Button className="w-full" variant="secondary">
                    {buttonText}
                  </Button>
                </a>
            </div>
     );
}
 
export default Card;