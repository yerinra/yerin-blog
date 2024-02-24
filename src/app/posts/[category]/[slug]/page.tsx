import { MDXRemote } from "next-mdx-remote/rsc";
import { prettyOptions } from "@/lib/options";
import { getPost } from "@/lib/utils/getPosts";
import { twMerge as tw } from "tw-merge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    <article className="prose dark:prose-dark !w-full">
      <Button asChild className="mb-4" variant="secondary">
        <Link href={`/posts/${post.category}`}>{post.category}</Link>
      </Button>
      <h1 className="mb-2">{post.title}</h1>
      <h4 className="">{post.date}</h4>
      {/* <h4 className="flex m-2">
        {post.tags.map((tag: string) => (
          <Button key={tag} variant={"link"} className="mr-2 p-0">
            #{tag}
          </Button>
        ))}
      </h4> */}
      {/* @ts-expect-error Server Component */}
      <main className="mt-[70px]">
        <MDXRemote source={post.content} options={prettyOptions} />
      </main>
    </article>
  );
}
