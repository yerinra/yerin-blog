// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";

import { getCategorizedPosts } from "@/lib/utils/getPosts";
import PostPreview from "../components/post-preview";

// import Link from "next/link";

// export default function Posts() {
//   // 1) Set blogs directory
//   const postDir = "posts";

//   // 2) Find all files in the blog directory
//   const files = fs.readdirSync(path.join(postDir));

//   // 3) For each blog found
//   const posts = files.map((filename) => {
//     // 4) Read the content of that blog
//     const fileContent = fs.readFileSync(path.join(postDir, filename), "utf-8");

//     // 5) Extract the metadata from the blog's content
//     const { data: frontMatter } = matter(fileContent);

//     // 6) Return the metadata and page slug
//     return {
//       meta: frontMatter,
//       slug: filename.replace(".mdx", ""),
//     };
//   });

//   return (
//     <main className="flex flex-col">
//       <h1 className="text-3xl font-bold">My Blogging Site</h1>

//       <section className="py-10">
//         <h2 className="text-2xl font-bold">Latest Blogs</h2>

//         <div className="py-2">
//           {posts.map((blog) => (
//             <Link href={`posts/${blog.slug}`} passHref key={blog.slug}>
//               <div className="py-2 flex justify-between align-middle gap-2">
//                 <div>
//                   <h3 className="text-lg font-bold">{blog.meta.title}</h3>
//                   <p className="text-gray-400">{blog.meta.description}</p>
//                 </div>
//                 <div className="my-auto text-gray-400">
//                   <p>{blog.meta.date}</p>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

export default function Posts() {
  const posts = getCategorizedPosts();
  return (
    <section>
      {posts !== null &&
        Object.keys(posts).map((post) => (
          <PostPreview category={post} posts={posts[post]} key={post} />
        ))}
    </section>
  );
}
