import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Amanda Mayfield - Software Engineer" },
  ];
}

export default function Home() {
  return (
    <>
      <h1>This is the home component</h1>
    </>
  );
}
