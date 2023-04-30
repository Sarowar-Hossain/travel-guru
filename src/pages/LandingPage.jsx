import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { Link, useLoaderData } from "react-router-dom";
import Header from "../shared/Header";

const LandingPage = () => {
  const data = useLoaderData();

  return (
    <div className="flex justify-center items-center h-screen">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((d) => {
          return (
            <SwiperSlide key={d.id}>
              <div
                style={{ backgroundImage: `url(${d.image_url})` }}
                className={"w-screen h-screen bg-no-repeat bg-cover bg-center"}
              >
                <div className="container mx-auto">
                  <Header></Header>
                  <div className="grid grid-flow-col gap-12 items-center mx-auto mt-[5%]">
                    <div className="">
                      <h1 className="text-white font-extrabold text-6xl">
                        {d.name}
                      </h1>
                      <p className="text-white text-xl mt-10">
                        {d.description}
                      </p>
                      <Link to={`placeCard/${d.id}`}>
                        {" "}
                        <button className="bg-orange-500 font-bold text-2xl rounded-md py-4 px-10 text-white mt-10">
                          Booking
                        </button>
                      </Link>
                    </div>
                    <div className="">
                      <SwiperSlide>
                        <img
                          className="w-[400px] h-[620px] object-cover border-8 rounded-3xl border-white"
                          src={d.image_url}
                        />
                      </SwiperSlide>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default LandingPage;
