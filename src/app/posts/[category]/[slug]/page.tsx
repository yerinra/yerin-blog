import { MDXRemote } from "next-mdx-remote/rsc";
import { prettyOptions } from "@/lib/options";
import { getPost } from "@/lib/utils/getPosts";
import { twMerge as tw } from "tw-merge";

export async function generateMetadata({ params }: any) {
  const blog = getPost(params.slug);

  return {
    title: blog.title,
    description: blog.description,
  };
}

export default function Post({ params }: any) {
  const post = getPost(params.slug);

  return (
    <article className={tw("prose dark:prose-dark !w-full")}>
      <h2>{post.category}</h2>
      <h1>{post.title}</h1>
      <h3>{post.date}</h3>
      <h3>
        {post.tags.map((tag: string) => (
          <div key={tag}>#{tag}</div>
        ))}
      </h3>
      {/* @ts-expect-error Server Component */}
      <MDXRemote source={post.content} options={prettyOptions} />
    </article>
  );
}
