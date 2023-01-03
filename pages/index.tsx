import Layout from "../components/Layout";
import Calendar from "../components/Calendar";
import SearchBar from "../components/SearchBar/SearchBar";

const Index: React.FC = () => (
  <Layout>
    <h1>Welcome to the Home page!</h1>
    <Calendar />
    <SearchBar />
  </Layout>
);

export default Index;
