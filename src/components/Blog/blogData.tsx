import blogs from "@/data/blogs.json";
import { Blog } from "@/types/blog";

const blogData = blogs as Blog[];

export const getBlogBySlug = (slug: string) =>
  blogData.find((blog) => blog.slug === slug);

export default blogData;
