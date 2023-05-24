import { Helmet } from "react-helmet-async";
import CarouselHome from "./CarouselHome";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";
import Recommends from "./Recommends";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <CarouselHome />
      <Category />
      <PopularMenu></PopularMenu>
      <Featured />
      <Testimonials />
      <Recommends />
    </div>
  );
};

export default Home;
