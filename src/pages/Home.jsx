import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import { featuresData } from "../data/featuresData";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import { ServicesData } from "../data/servicesData";

export default function Home() {
  return (
    <main className="bg-backdrop">
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto flex flex-col gap-6 md:flex-row-reverse">
          <aside
            data-aos="fade-left"
            data-aos-delay="3000"
            data-aos-duration="1000"
            className="flex-1 min-h-[300px] md:min-h-[400px] relative"
          >
            <img
              src="/laundry.gif"
              alt="A working/moving washing machine"
              className="absolute left-0 top-0 w-full h-full object-cover"
            />
          </aside>
          <aside className="flex-1 flex flex-col  justify-center gap-2">
            <h2
              data-aos="fade-down"
              data-aos-duration="1000"
              className="text-primary font-bold text-xl md:text-4xl"
            >
              Lets! Wash it <span className="text-secondary">Clean!</span>
            </h2>
            <p
              data-aos="fade-down"
              data-aos-delay="1000"
              data-aos-duration="1000"
              className="text-base md:text-lg text-justify leading-loose text-dark/80"
            >
              Laudromat is your one stop shop for dry cleaning service lovers
              out there Who love having the neatest and iron clothes in the room
            </p>
            <Link
              data-aos="fade-down"
              data-aos-delay="2000"
              data-aos-duration="1000"
              to={"/services"}
              className="py-2 px-4 bg-secondary text-white border border-secondary hover:bg-white hover:text-secondary rounded-md w-max"
            >
              Get Started
            </Link>
          </aside>
        </div>
      </section>
      <section className="bg-backdrop py-20 px-2 md:px-4">
        <div className="container mx-auto flex flex-col gap-6 bg-white rounded-md shadow-lg shadow-slate-200 px-6 py-8 md:p-10 md:pt-16">
          <div className="flex flex-col md:flex-row gap-6">
            <h3
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="font-semibold text-dark text-lg md:text-2xl leading-tight flex-1"
            >
              We strive to provide you the best quality yet affordable laundry
              service in the country
            </h3>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="flex-1 flex flex-col gap-6"
            >
              <p
                data-aos="fade-down"
                data-aos-delay="300"
                data-aos-duration="650"
                className="text-dark/70 leading-loose text-base md:text-lg"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, officiis perspiciatis! Cumque, perspiciatis facere quo
                minima rerum ut consequuntur consequatur aliquid voluptas
                eligendi praesentium et sapiente corporis est veniam sed.
              </p>
              <Link
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="800"
                className="w-max py-2 px-4 md:px-6 bg-dark border border-dark/80 hover:bg-white text-white hover:text-dark/80 text-sm rounded-md flex items-center gap-2"
                to={"/about"}
              >
                Explore more <IoArrowForward />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 py-10">
            {featuresData.map((e, i) => (
              <aside
                data-aos={i == 0 ? "zoom-in-left" : "zoom-out-right"}
                data-aos-delay={(1 + 1) * 100}
                data-ios-duration="1000"
                key={e.id}
                className="bg-backdrop p-4 md:p-6 rounded-md flex flex-col gap-4 md:gap-6 items-center text-center hover:-translate-y-4 border-2 border-primary/5 hover:border-primary/20 cursor-pointer"
              >
                <span className="text-2xl md:text-4xl text-primary">
                  {e.icon}
                </span>
                <h5 className="text-lg md:text-xl font-semibold text-dark/70">
                  {e.title}
                </h5>
              </aside>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="container mx-auto flex flex-col gap-6">
          <h3 className="text-dark text-center text-xl md:text-3xl relative pb-4 after:absolute after:w-12 after:h-1 after:bg-secondary after:left-1/2 after:-translate-x-1/2 after:bottom-0">
            {" "}
            Our Latest Prodoct
          </h3>
          <div className="">
            <Swiper spaceBetween={50} slidesPerView={3}>
              {ServicesData.map((service) => (
                <SwiperSlide className="relative rounded-md overflow-hidden h-44 lg:h-56 select-none">
                  <img
                    src={service.image}
                    alt=""
                    className="absolute left-0 top-0 object-cover w-full h-full object-center"
                  />
                  <Link
                    to={`/servicecategory=${service.link}`}
                    className="absolute left-0 top-0 object-cover w-full h-full flex object-center items-end justify-center  p-4 bg-gradient-to-b from-transparent via-transparent to-dark"
                  >
                    <h4 className="text-white text-xl md:text-3xl to-current font-medium">
                      {service.text}
                    </h4>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </main>
  );
}
