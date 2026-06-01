type Author = {
  name: string;
  image: string;
  designation: string;
};

type BlogReference = {
  label: string;
  url: string;
};

export type Blog = {
  id: number;
  slug: string;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
  readingTime?: string;
  content: {
    intro: string;
    sections: {
      title: string;
      paragraphs: string[];
    }[];
    conclusion: string;
  };
  references?: BlogReference[];
};
