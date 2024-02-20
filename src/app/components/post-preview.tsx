import { PostInfo } from "@/lib/types";
import Link from "next/link";
import React from "react";

type PostPreviewProps = {
  category: string;
  posts: PostInfo[];
};
export default function PostPreview({ category, posts }: PostPreviewProps) {
  return (
    <section>
      <Link href={`/posts/${category}`}>{category}</Link>
      <ul>
        {posts.map((post, id) => (
          <li key={id}>
            <Link href={`/posts/${category}/${post.id}`}>{post.title}</Link>
            <div>{post.description}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
