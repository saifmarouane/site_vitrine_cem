import { readFile } from "fs/promises";
import { unstable_noStore as noStore } from "next/cache";
import path from "path";

export type StoredTestimonialReview = {
  createdAt: string;
  name: string;
  facebookUrl: string;
  rating: number;
  comment: string;
};

const reviewsFilePath = path.join(
  process.cwd(),
  "storage",
  "excel",
  "testimonial-reviews.csv",
);

const parseCsvLine = (line: string) => {
  const values: string[] = [];
  let current = "";
  let insideQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const nextChar = line[index + 1];

    if (char === '"' && insideQuotes && nextChar === '"') {
      current += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      insideQuotes = !insideQuotes;
      continue;
    }

    if (char === "," && !insideQuotes) {
      values.push(current);
      current = "";
      continue;
    }

    current += char;
  }

  values.push(current);
  return values;
};

export const getStoredTestimonialReviews = async () => {
  noStore();

  try {
    const file = await readFile(reviewsFilePath, "utf8");
    const [, ...rows] = file.split(/\r?\n/).filter(Boolean);

    return rows
      .map((row): StoredTestimonialReview | null => {
        const [createdAt, formType, name, facebookUrl, rating, comment] =
          parseCsvLine(row).map((value) => value.trim());

        if (formType !== "testimonial" || !name || !comment) {
          return null;
        }

        return {
          createdAt,
          name,
          facebookUrl,
          rating: Number(rating) || 0,
          comment,
        };
      })
      .filter((review): review is StoredTestimonialReview => Boolean(review))
      .reverse();
  } catch {
    return [];
  }
};
