import vidBg from "../assets/portfolio-bg-vid.mp4";

const Home = () => {
  return (
    <div className="" id="home">
      {/* Self-Image */}
      <div className="relative z-0 w-auto h-screen overflow-hidden">
        <video
          autoPlay
          muted
          className="absolute top-0 left-0 object-cover w-full h-full"
        >
          <source src={vidBg} type="video/mp4" />
        </video>
      </div>
      {/* Text */}

      <div className="absolute top-0 left-0 z-20 pt-10 mt-10 bg-transparent lg:px-4 lg:mt-6 md:pt-20 ">
        <div className="w-full text-center bg-transparent md:text-left">
          <h1 className="py-2 text-3xl text-black bg-transparent font-spartan lg:text-6xl lg:pl-2 md:pl-4 md:text-5xl">
            Hello, my name is
          </h1>
          <h1 className="py-2 text-5xl font-semibold text-transparent font-playfair bg-clip-text text-gradient bg-gradient-to-r from-primaryBtn to-secondaryBtn md:py-6 md:text-8xl lg:text-9xl md:pl-2">
            Carlos Figueroa
          </h1>
          <h1 className="w-full px-2 py-4 text-2xl text-black bg-transparent font-spartan lg:text-5xl lg:pl-2 md:text-4xl md:pl-4 lg:pr-96">
            A Front-End/ HTML Email Developer that develops responsive websites
            and emails.
          </h1>
        </div>
        {/* Buttons */}
        <div className="mt-5 text-center bg-transparent lg:pl-2 md:text-left md:pl-2">
          <a href="#contact" className="pr-1">
            <button className="px-4 py-2 text-2xl text-white rounded hover:bg-secondaryBtn bg-main hover:text-black font-spartan lg:text-3xl">
              Let&apos;s Talk
            </button>
          </a>
          <a href="#projects" className="pl-1">
            <button className="px-4 py-2 text-2xl text-white rounded hover:bg-secondaryBtn bg-primaryBtn hover:text-black font-spartan lg:text-3xl">
              See my work!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
