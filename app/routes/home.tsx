import type { Route } from "./+types/home";
import Starfield from "~/components/Starfield/Starfield";
import Skills from "~/components/Skills/Skills";
import IntroHome from "~/components/IntroHome/IntroHome";
import BentoDivider from "~/components/BentoDivider/BentoDivider";
import IntroTitle from "~/components/IntroTitle/IntroTitle";
import SocialsHome from "~/components/SocialsHome/SocialsHome";

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
      <IntroHome />
      <BentoDivider />
      <Skills />
      <BentoDivider />
      <SocialsHome />
    </>
  );
}
