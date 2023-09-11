import me from "../../src/assets/Me.png";

const Home = () => {
  const handleClick = (e, targetId) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="px-7 md:px-10 h-screen scroll-smooth" id="home">
      <div>
        <div className="w-full flex flex-col  items-center justify-between lg:flex-row md:flex-col-reverse">
          {/* Text */}
          <div>
            <h6 className="text-3xl font-lato mt-12">Hello, my name is</h6>
            <h1
              className="font-semibold font-playfair text-5xl
            py-4 text-transparent bg-clip-text text-gradient bg-gradient-to-r from-main to-primaryBtn  md:text-8xl"
            >
              Carlos Figueroa
            </h1>
            <p className="text-2xl font-lato font-semibold md:w-96">
              Front-End Developer
            </p>

            {/* Buttons */}
            <div className="mt-5">
              <button
                onClick={(e) => handleClick(e, "contact")}
                className="font-lato text-lg btn py-2 px-4 rounded bg-secondaryBtn hover:bg-black hover:border-black hover:text-white transition-all duration-500"
              >
                Let's Talk
              </button>
              <button
                onClick={(e) => handleClick(e, "projects")}
                className="font-lato text-lg btn text-white bg-primaryBtn px-6 py-2 rounded hover:bg-black hover:border-black ml-5 transition-all duration-500"
              >
                Projects
              </button>
            </div>
          </div>
          {/* Self-Image */}
          <div className="order-first md:order-last relative">
            <img src={me} alt=""></img>
          </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 30 30"
            stroke-width="1"
            stroke="currentColor"
            class="w-6 h-6"
            className="mx-auto w-14 mt-8 cursor-pointer hover:translate-y-3 transition-all duration-700 hidden lg:block"
            onClick={(e) => handleClick(e, "about")}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
