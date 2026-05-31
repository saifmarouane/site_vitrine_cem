import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Accueil",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Comparer",
    path: "/comparer",
    newTab: false,
  },
  {
    id: 3,
    title: "Fournisseurs",
    path: "/fournisseurs",
    newTab: false,
  },
  {
    id: 4,
    title: "Electricite",
    path: "/electricite",
    newTab: false,
  },
  {
    id: 5,
    title: "Gaz",
    path: "/gaz",
    newTab: false,
  },
  {
    id: 6,
    title: "Ressources",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Energie verte",
        path: "/energie-verte",
        newTab: false,
      },
      {
        id: 62,
        title: "Guides",
        path: "/guides",
        newTab: false,
      },
      {
        id: 63,
        title: "FAQ",
        path: "/faq",
        newTab: false,
      },
    ],
  },
  {
    id: 7,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];

export default menuData;
