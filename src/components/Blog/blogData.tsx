import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Comment changer de fournisseur d'electricite ?",
    paragraph:
      "Les etapes a connaitre pour comparer les offres, choisir un nouveau contrat et changer sans coupure.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "EnergieCompare",
      image: "/images/blog/author-01.png",
      designation: "Guide pratique",
    },
    tags: ["electricite"],
    publishDate: "Guide",
  },
  {
    id: 2,
    title: "Prix fixe ou prix indexe : que choisir ?",
    paragraph:
      "Comprendre les differences entre prix fixe, prix variable et prix indexe avant de souscrire.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "EnergieCompare",
      image: "/images/blog/author-02.png",
      designation: "Guide pratique",
    },
    tags: ["tarifs"],
    publishDate: "Guide",
  },
  {
    id: 3,
    title: "Comment reduire sa facture d'energie ?",
    paragraph:
      "Les bons reflexes pour comparer, ajuster sa consommation et trouver une offre adaptee.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "EnergieCompare",
      image: "/images/blog/author-03.png",
      designation: "Guide pratique",
    },
    tags: ["economies"],
    publishDate: "Guide",
  },
];
export default blogData;
