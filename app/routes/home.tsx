import type { Route } from "./+types/home";
import Starfield from "~/components/Starfield/Starfield";
import Skills from "~/components/Skills/Skills";
import Intro from "~/components/Intro/Intro";
import BentoDivider from "~/components/BentoDivider/BentoDivider";
import IntroTitle from "~/components/IntroTitle/IntroTitle";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Amanda Mayfield - Software Engineer" }];
}

export default function Home() {
  return (
    <>
      <Starfield />
      <BentoDivider />
      <IntroTitle />
      <BentoDivider />
      <Intro />
      <BentoDivider />
      <Skills />
      <BentoDivider />
    </>
  );
}
