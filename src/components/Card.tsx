import { PrismicNextImage } from "@prismicio/next";
import { Button } from "./ui/button";
import { ImageFieldImage, KeyTextField } from "@prismicio/client";

type CardProps = {
    imageField: ImageFieldImage | null | undefined;
    titleField: KeyTextField;
    buttonText: KeyTextField;
    link: string;
};

const Card = ( {imageField, titleField, buttonText, link}: CardProps ) => {
    return ( 
        <div
          className="flex flex-col w-full bg-white shadow-md rounded-lg p-4 min-w-80 max-w-96"
        >
              {/* Image */}
              <PrismicNextImage
                alt=''
                className="w-full h-60 object-cover rounded-lg"
                field={imageField}
              />

              {/* Title */}
              <p className="mt-4 text-lg font-bold">{titleField}</p>,
              
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