import { Link } from 'react-router';

export default function Header() {
  return (
    <div>
      <Link to={"/"} aria-label="Click to visit the Home page">Home</Link>
      <Link to={"/about"} aria-label="Click to visit the About page">About</Link>
      <Link to={"/contact"} aria-label="Click to visit the Contact page">Contact</Link>
      <Link to={"/projects"} aria-label="Click to visit the Projects page">Projects</Link>
    </div>
  );
}