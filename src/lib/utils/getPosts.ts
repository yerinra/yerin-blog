import fs from "fs";
import path from "path";
import matter from "gray-matter";
import moment from "moment";

import type { PostInfo } from "../types";

const postDir = "posts";

export const getSortedPosts = (): PostInfo[] => {
  const files = fs.readdirSync(path.join(postDir));

  const posts = files.map((filename) => {
    const id = filename.replace(".mdx", "");
    const fileContent = fs.readFileSync(path.join(postDir, filename), "utf-8");
    const { data: frontMatter } = matter(fileContent);

    return {
      id,
      title: frontMatter.title,
      date: frontMatter.date,
      category: frontMatter.category,
      tags: frontMatter.tags,
      description: frontMatter.description,
    };
  });

  return posts.sort((a, b) => {
    const format = "YYYY-MM-DD";
    const dateOne = moment(a.date, format);
    const dateTwo = moment(b.date, format);
    if (dateOne.isBefore(dateTwo)) return 1;
    else if (dateOne.isAfter(dateTwo)) return -1;
    else return 0;
  });
};

export const getCategorizedPosts = (): Record<string, PostInfo[]> => {
  const sortedPosts = getSortedPosts();
  const categorizedPosts: Record<string, PostInfo[]> = {};

  sortedPosts.forEach((post) => {
    if (!categorizedPosts[post.category]) {
      categorizedPosts[post.category] = [];
    }
    categorizedPosts[post.category].push(post);
  });

  return categorizedPosts;
};

export const getPost = (id: string) => {
  // const markdownFile = fs.readFileSync(
  //   path.join("posts", id + ".mdx"),
  //   "utf-8"
  // );
  const fullPath = path.join(postDir, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const { data: frontMatter, content } = matter(fileContents);

  return {
    id,
    content,
    title: frontMatter.title,
    category: frontMatter.category,
    date: frontMatter.date,
    tags: frontMatter.tags,
    description: frontMatter.description,
  };
};
