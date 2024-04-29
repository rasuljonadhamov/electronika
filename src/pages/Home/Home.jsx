import Slider from "react-slick";
// import Button from "../../components/Button";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl max-w-[450px] lg:hidden font-medium mb-8 lg:mb-12 mx-9 pt-10">
            <span className="text-[#E61212]">Aksiyada</span> ishtirok etib{" "}
            <span className="text-primary mr-2"> Spark</span>
            avtomobilini yutib oling!
          </h1>
          <img
            src={"../../../public/images/svg/spark.svg"}
            alt="Slide 2"
            className="object-cover w-full lg:w-1/2 mb-8 lg:mb-0"
          />
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-black text-3xl xsm:hidden md:hidden lg:block hidden  lg:text-5xl font-medium mb-8 lg:mb-12">
              <span className="text-[#E61212]">Aksiyada</span> ishtirok etib{" "}
              <span className="text-primary mr-2"> Spark</span>
              avtomobilini yutib oling!
            </h1>
            <button className="bg-primary hover:bg-opacity-60 text-white font-bold py-2 px-8 lg:px-12 rounded-sm shadow-md">
              Batafsil
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          <h1 className="text-black text-3xl lg:text-5xl sm:text-4xl max-w-[450px] lg:hidden font-medium mb-8 lg:mb-12 mx-9 pt-10">
            <span className="text-[#E61212]">Aksiyada</span> ishtirok etib{" "}
            <span className="text-primary mr-2"> Spark</span>
            avtomobilini yutib oling!
          </h1>
          <img
            src={"../../../public/images/svg/spark.svg"}
            alt="Slide 1"
            className="object-cover w-full lg:w-1/2 mb-8 lg:mb-0"
          />
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-black text-3xl xsm:hidden md:hidden lg:block hidden  lg:text-5xl font-medium mb-8 lg:mb-12">
              <span className="text-[#E61212]">Aksiyada</span> ishtirok etib{" "}
              <span className="text-primary mr-2"> Spark</span>
              avtomobilini yutib oling!
            </h1>
            <button className="bg-primary hover:bg-opacity-60 text-white font-bold py-2 px-8 lg:px-12 rounded-sm shadow-md">
              Batafsil
            </button>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Home;
