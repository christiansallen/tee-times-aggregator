import Link from "next/link";

type Props = {
  // Add any props for the navigation component here
};

const Navigation: React.FC<Props> = (
  {
    /* Add props here */
  }
) => (
  <nav>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/test">Test</Link>
  </nav>
);

export default Navigation;
