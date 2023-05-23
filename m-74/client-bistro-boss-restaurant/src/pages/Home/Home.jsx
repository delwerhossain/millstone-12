import CarouselHome from "./CarouselHome";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";


const Home = () => {
  return (
    <div>
      <CarouselHome />
      <Category />
      <PopularMenu></PopularMenu>
      <Featured/>
    </div>
  );
};

export default Home;
