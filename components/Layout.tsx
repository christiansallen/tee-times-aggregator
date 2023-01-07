import Head from "next/head";
// import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
  // Add any other props for the layout component here
};

const Layout: React.FC<Props> = ({ children /* Add other props here */ }) => (
  <>
    <Head>
      <title>Beehive Golf</title>
      {/*Add any other head elements here*/}
    </Head>
    {/* <header>
      <Navigation />
    </header> */}
    <main>{children}</main>
  </>
);

export default Layout;
