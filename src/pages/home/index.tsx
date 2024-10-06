import { GetServerSideProps } from "next/types";
import HomePageComponent from "../../components/home";
import styles from "./home_page.module.css";
const HomePage: React.FC = () => {
  return <HomePageComponent />;
};

export default HomePage;
