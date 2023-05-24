import { Helmet } from "react-helmet-async";
import CarouselHome from "./CarouselHome";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";


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
    </div>
  );
};

export default Home;
