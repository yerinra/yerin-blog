import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PostInfo } from "@/lib/types";
import { CodeIcon, QuoteIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

type PostPreviewProps = {
  category: string;
  posts: PostInfo[];
};
export default function PostPreview({ category, posts }: PostPreviewProps) {
  return (
    <section className="flex flex-col mb-4">
      <h2 className="mb-5">
        <Button asChild variant={"ghost"}>
          <Link href={`/posts/${category}`} className="bg-acc flex gap-2">
            {category == "dev" && <CodeIcon />}
            {category == "life" && <QuoteIcon />}
            {category}
          </Link>
        </Button>
      </h2>
      <ul className="flex flex-col">
        {posts.map((post, id) => (
          <li key={id}>
            <Link href={`/posts/${category}/${post.id}`}>
              <div className="text-2xl font-semibold tracking-tight mb-1 hover:text-primary/80 ">
                {post.title}
              </div>
            </Link>
            <div className="text-primary text-sm tracking-tight mb-2">
              {post.date}
            </div>
            {/* <section className="text-sm flex mb-4 gap-x-1">
              {post.tags.map((tag, i) => (
                <Badge variant="outline" key={i}>
                  {tag}
                </Badge>
              ))}
            </section> */}
            <div className="text-primary/50 text-md tracking-tight mb-4">
              {post.description}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
