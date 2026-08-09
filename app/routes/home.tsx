import type { Route } from "./+types/home";
import Starfield from "~/components/Starfield/Starfield";
import IntroTitle from "~/components/IntroTitle/IntroTitle";

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
