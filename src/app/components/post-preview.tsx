import { PostInfo } from "@/lib/types";
import Link from "next/link";
import React from "react";

type PostPreviewProps = {
  category: string;
  posts: PostInfo[];
};
export default function PostPreview({ category, posts }: PostPreviewProps) {
  return (
    <section className="flex flex-col">
      <h2 className="bg-gray-300">
        <Link href={`/posts/${category}`}>{category}</Link>
      </h2>
      <ul className="flex flex-col">
        {posts.map((post, id) => (
          <li key={id}>
            <Link href={`/posts/${category}/${post.id}`}>{post.title}</Link>
            <div className="text-black/50">{post.description}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
