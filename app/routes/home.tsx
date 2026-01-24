import type { Route } from "./+types/home";
import Starfield from "~/components/Starfield/Starfield";
import Skills from "~/components/Skills/Skills";
import Intro from "~/components/Intro/Intro";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Amanda Mayfield - Software Engineer" }];
}

export default function Home() {
  return (
    <>
      <Starfield />
      <div className="home-contain">
        <Intro />
        <Skills />
      </div>
    </>
  );
}
