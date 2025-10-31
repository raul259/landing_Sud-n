import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import type { ComponentProps } from "react";

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-6 space-x-0 justify-center items-center data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-center data-[orientation=vertical]:justify-center">
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <a href="#tu-indiferencia">Comparte</a>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <a href="https://www.wfp.org/" target="_blank" rel="noopener noreferrer">Tu Elección</a>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <a href="mailto:amb.ofc.sudan@gmail.com">Contacto</a>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
