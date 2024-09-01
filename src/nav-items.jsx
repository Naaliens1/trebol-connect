import { HomeIcon, BookOpenIcon, PhoneIcon, Share2Icon } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Inicio",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Catálogo",
    to: "/catalogo",
    icon: <BookOpenIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Contacto",
    to: "/contacto",
    icon: <PhoneIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Redes Sociales",
    to: "/redes-sociales",
    icon: <Share2Icon className="h-4 w-4" />,
    page: <Index />,
  },
];
