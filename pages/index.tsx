import Layout from "../components/Layout";
import Calendar from "../components/Calendar";
import Map from "../components/Map/Map";
import SearchBar from "../components/SearchBar/SearchBar";

const Index: React.FC = () => (
  <Layout>
    <h1>Beehive Golf</h1>
    <SearchBar />
    <Map />
  </Layout>
);

export default Index;
