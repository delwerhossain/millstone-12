import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import slider1 from "./../../assets/home/slide1.jpg";
import slider2 from "./../../assets/home/slide2.jpg";
import slider3 from "./../../assets/home/slide3.jpg";
import slider4 from "./../../assets/home/slide4.jpg";
import slider5 from "./../../assets/home/slide5.jpg";
import SectionTile from "../../Components/SectionTile/SectionTile";

const Category = () => {
    return (
      <section className="mx-auto">
        <SectionTile
          title={" From 11:00 am to 10:00 pm "}
          header={"ORDER ONLINE"}
        />
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slider1} alt="" />
            <p className="text-xl text-slate-50 uppercase text-center font-semibold p-2 -my-16">
              salads
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} alt="" />
            <p className="text-xl uppercase text-slate-50 text-center font-semibold p-2 -my-16">
              pizza
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} alt="" />
            <p className="text-xl text-slate-50 uppercase text-center font-semibold p-2 -my-16">
              soups
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider4} alt="" />
            <p className="text-xl text-slate-50 uppercase text-center font-semibold p-2 -my-16">
              cake
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider5} alt="" />

            <p className="text-xl text-slate-50 uppercase text-center font-semibold p-2 -my-16">
              cake
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src={slider5} alt="" />
          </SwiperSlide>
        </Swiper>
      </section>
    );
};

export default Category;
