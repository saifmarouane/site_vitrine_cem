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
    title: "Électricité",
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
        title: "Électricité verte",
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
        title: "MaPrimeRénov",
        path: "/maprimerenov",
        newTab: false,
      },
      {
        id: 65,
        title: "Panneaux solaires",
        path: "/panneaux-solaires",
        newTab: false,
      },
      {
        id: 66,
        title: "Simulateur",
        path: "/simulateur",
        newTab: false,
      },
      {
        id: 67,
        title: "Témoignages",
        path: "/temoignages",
        newTab: false,
      },
      {
        id: 68,
        title: "Glossaire",
        path: "/glossaire",
        newTab: false,
      },
      {
        id: 64,
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
