import CarouselHome from "./CarouselHome";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";


const Home = () => {
  return (
    <div>
      <CarouselHome />
      <Category />
      <PopularMenu></PopularMenu>
      <Featured />
      <Testimonials/>
    </div>
  );
};

export default Home;
