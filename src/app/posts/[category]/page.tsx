import PostPreview from "@/app/components/post-preview";
import { getCategorizedPosts } from "@/lib/utils";
import React from "react";

export default function CategorizedPosts({ params }) {
  const posts = getCategorizedPosts();
  return (
    <section>
      <h2>{params.category}</h2>
      <PostPreview
        category={params.category}
        posts={posts[params.category]}
        key={params.category}
      />
    </section>
  );
}
