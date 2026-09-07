import type { Route } from "./+types/home";
import Starfield from "~/components/home/Starfield/Starfield";
import IntroTitle from "~/components/home/IntroTitle/IntroTitle";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Amanda Mayfield - Software Engineer" }];
}

export default function Home() {
  return (
    <main>
      <Starfield />
      <IntroTitle />
    </main>
  );
}
