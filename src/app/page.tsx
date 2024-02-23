import { getCategorizedPosts } from "@/lib/utils/getPosts";

export default function Home() {
  return (
    <main className=" flex flex-col gap-y-2">
      <article>
        <h1>Hello World!</h1>
        <h2>I am Yerin.</h2>
        I’m a web developer with a focus on creating front ends with React. I’m
        currently living in Seoul, Korea. My current interests in the JavaScript
        space are on awesome meta frameworks like Next.js. Even though I focus
        most of my time on front end work, technologies like Prisma keep me
        interested in backend work too. I’m always on the lookout for learning
        and adopting bleeding edge technologies and libraries in the
        Web/Javascript ecosystem. You can contact me via LinkedIn. You can also
        check my GitHub.
      </article>

      <article>
        안녕하세요, 반갑습니다! 👋
        <br /> 프론트엔드 개발자 라예린이라고 합니다.
      </article>
    </main>
  );
}
