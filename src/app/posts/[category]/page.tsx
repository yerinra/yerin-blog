import PostPreview from "@/app/components/post-preview";
import { getCategorizedPosts } from "@/lib/utils/getPosts";
import React from "react";

export default function CategorizedPosts({ params }) {
  const posts = getCategorizedPosts();
  return (
    <section className="">
      {/* <h2 className="font-semibold">{params.category}</h2> */}
      <PostPreview
        category={params.category}
        posts={posts[params.category]}
        key={params.category}
      />
    </section>
  );
}
