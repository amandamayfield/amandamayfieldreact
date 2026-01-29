import type { Route } from "./+types/home";
import BentoDivider from "~/components/BentoDivider/BentoDivider";
import AboutTitle from "~/components/AboutTitle/AboutTitle";
import AboutFashion from "~/components/AboutFashion/AboutFashion";
import AboutCode from "~/components/AboutCode/AboutCode";
import NotAtWork from "~/components/NotAtWork/NotAtWork";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Amanda Mayfield - Software Engineer" }];
}

export default function About() {
  return (
    <>
      <AboutTitle />
      <BentoDivider />
      <AboutFashion />
      <BentoDivider />
      <AboutCode />
      <BentoDivider />
      <NotAtWork />
    </>
  );
}
