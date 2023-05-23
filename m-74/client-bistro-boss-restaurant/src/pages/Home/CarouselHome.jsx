import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const CarouselHome = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className="w-11/12 mx-auto">
      <AutoplaySlider
        play
        cancelOnInteraction={false}
        interval={2000}
        animation="fallAnimation"
      >
        <div data-src="https://caferati.me/images/series/bojack-5.jpg" />
        <div data-src="https://caferati.me/images/series/bojack-0.png" />
        <div data-src="https://caferati.me/images/series/bojack-2.png" />
        <div data-src="https://caferati.me/images/series/bojack-1.png" />
      </AutoplaySlider>
    </div>
  );
};

export default CarouselHome;
