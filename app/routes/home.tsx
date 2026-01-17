import Starfield from "~/components/Starfield/Starfield";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Amanda Mayfield - Software Engineer" }];
}

export default function Home() {
  return (
    <>
      <Starfield />
      <div className="home-content"></div>
    </>
  );
}
