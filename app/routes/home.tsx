import type { Route } from "./+types/home";
import Starfield from "~/components/home/Starfield/Starfield";
import IntroTitle from "~/components/home/IntroTitle/IntroTitle";
import Summary from "~/components/home/Summary/Summary";
import "../style/app.scss";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Amanda Mayfield - Software Engineer" }];
}

export default function Home() {
  return (
    <main>
      <Starfield />
      <div className="page-layout">
        <IntroTitle />
        <Summary />
      </div>
    </main>
  );
}
