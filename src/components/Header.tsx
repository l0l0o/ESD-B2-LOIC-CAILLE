import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";


const Header = async () => {
    const client = createClient(); 
    const settings = await client.getSingle("settings")

    return (
        <NavigationMenu className="flex gap-6 justify-center p-4">
            {settings.data.navigation.map(({label, link}) => (
                <PrismicNextLink key={label} field={link} className="font-bold">{label}</PrismicNextLink>
            ))}
        </NavigationMenu>
    );
}
 
export default Header;