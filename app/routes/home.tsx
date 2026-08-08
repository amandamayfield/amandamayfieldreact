import type { Route } from "./+types/home";
import Starfield from "~/components/Starfield/Starfield";
import IntroHome from "~/components/IntroHome/IntroHome";
import IntroTitle from "~/components/IntroTitle/IntroTitle";
import SocialsHome from "~/components/SocialsHome/SocialsHome";
import AboutFashion from "~/components/AboutFashion/AboutFashion";
import AboutCode from "~/components/AboutCode/AboutCode";
import NotAtWork from "~/components/NotAtWork/NotAtWork";
import CraftCode from "~/components/CraftCode/CraftCode";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Amanda Mayfield - Software Engineer" }];
}

export default function Home() {
  return (
    <main>
      <Starfield />
      <IntroTitle />
      <AboutFashion />
      <IntroHome />
      <SocialsHome />
      <CraftCode />
      <AboutCode />
      <NotAtWork />
    </main>
  );
}
