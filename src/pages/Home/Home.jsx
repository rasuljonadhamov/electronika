import Slider from "react-slick";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="hero">
      <Slider {...settings}>
        <div className="container">
          <div className="flex items-center  justify-evenly ">
            <img
              src="/public/images/svg/spark.svg"
              alt="Slide 1"
              className=" object-cover w-1/2 "
            />
            <div className="">
              <h1 className="text-black text-5xl font-medium mb-8 ">
                <span className="text-[#E61212]">Aksiyada</span> ishtirok etib{" "}
                <span className="text-primary mr-2"> Spark</span>
                avtomobilini yutib oling!
              </h1>
              <button className="bg-primary hover:bg-opacity-60 text-white font-bold py-2 px-20 rounded-sm shadow-md mt-36 ml-44">
                Batafsil
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex items-center  justify-evenly ">
            <img
              src="/public/images/svg/spark.svg"
              alt="Slide 1"
              className=" object-cover w-1/2 "
            />
            <div className="">
              <h1 className="text-black text-5xl font-medium mb-8 ">
                <span className="text-[#E61212]">Aksiyada</span> ishtirok etib{" "}
                <span className="text-primary mr-2"> Spark</span>
                avtomobilini yutib oling!
              </h1>
              <button className="bg-primary hover:bg-opacity-60 text-white font-bold py-2 px-20 rounded-sm shadow-md mt-36 ml-48">
                Batafsil
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Home;
