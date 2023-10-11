import html from "../assets/html.png";
import css from "../assets/css.png";
import drupal from "../assets/drupal.png";
import git from "../assets/git.png";
import javascript from "../assets/javascript.png";
import litmus from "../assets/litmus.png";
import photoshop from "../assets/photoshop.png";
import react from "../assets/react.png";
import sass from "../assets/sass.png";
import tailwind from "../assets/tailwind.png";
import seo from "../assets/seo.png";
import responsive from "../assets/responsive.png";
import frontend from "../assets/frontend.png";
import discuss from "../assets/discuss.png";
import develop from "../assets/develop.png";
import deploy from "../assets/deploy.png";
import testing from "../assets/testing.png";
import plan from "../assets/plan.png";

const About = () => {
  return (
    <div className="flex flex-col pt-10 bg-secondaryBtn" id="about">
      {/* Skills */}
      <div className="flex flex-col items-center md:mt-16 bg-secondaryBtn">
        <div className="py-6 text-center bg-secondaryBtn">
          <h1 className="text-5xl font-semibold font-spartan bg-secondaryBtn md:my-6 lg:text-7xl">
            About Me
          </h1>
        </div>
        <div className="bg-secondaryBtn">
          <h1 className="text-2xl underline bg-secondaryBtn font-spartan decoration-main decoration-4 md:text-4xl lg:text-5xl">
            Skills
          </h1>
        </div>
        <div className="flex w-full py-4 justify-evenly bg-secondaryBtn">
          <div id="html" className="flex flex-col max-w-10 ">
            <div className="pb-2 bg-secondaryBtn">
              <img
                src={html}
                alt=""
                className="w-10 bg-secondaryBtn md:w-14 lg:w-20"
              />
            </div>
            <div>
              <p className="font-semibold bg-secondaryBtn font-spartan md:text-xl lg:text-2xl">
                HTML
              </p>
            </div>
          </div>
          <div
            id="css"
            className="flex flex-col items-center max-w-10 bg-secondaryBtn"
          >
            <div className="pb-2 bg-secondaryBtn">
              <img
                src={css}
                alt=""
                className="w-10 bg-secondaryBtn md:w-14 lg:w-20"
              />
            </div>
            <div className="">
              <p className="font-semibold bg-secondaryBtn font-spartan md:text-xl lg:text-2xl">
                CSS
              </p>
            </div>
          </div>
          <div
            id="javascript"
            className="flex flex-col items-center mx-w-10 bg-secondaryBtn"
          >
            <div className="pb-2 bg-secondaryBtn">
              <img
                src={javascript}
                alt=""
                className="w-10 bg-secondaryBtn md:w-14 lg:w-20"
              />
            </div>
            <div className="bg-secondaryBtn">
              <p className="font-semibold bg-secondaryBtn font-spartan md:text-xl lg:text-2xl">
                JavaScript
              </p>
            </div>
          </div>
          <div
            id="javascript"
            className="flex flex-col items-center mx-w-10 bg-secondaryBtn"
          >
            <div className="pb-2 bg-secondaryBtn">
              <img
                src={react}
                alt=""
                className="w-10 bg-secondaryBtn md:w-14 lg:w-20"
              />
            </div>
            <div>
              <p className="font-semibold bg-secondaryBtn font-spartan md:text-xl lg:text-2xl">
                React.js
              </p>
            </div>
          </div>
          <div
            id="javascript"
            className="flex flex-col items-center mx-w-10 bg-secondaryBtn"
          >
            <div className="pb-4 bg-secondaryBtn">
              <img
                src={tailwind}
                alt=""
                className="w-10 bg-secondaryBtn md:w-14 lg:w-20"
              />
            </div>
            <div>
              <p className="font-semibold bg-secondaryBtn font-spartan md:text-xl lg:text-2xl">
                Tailwind
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full py-4 justify-evenly bg-secondaryBtn">
          <div
            id="javascript"
            className="flex flex-col items-center mx-w-10 bg-secondaryBtn"
          >
            <div className="pb-2 bg-secondaryBtn">
              <img
                src={sass}
                alt=""
                className="w-10 bg-secondaryBtn md:w-14 lg:w-20"
              />
            </div>
            <div className="">
              <p className="font-semibold bg-secondaryBtn font-spartan md:text-xl lg:text-2xl">
                Sass
              </p>
            </div>
          </div>
          <div
            id="javascript"
            className="flex flex-col items-center mx-w-10 bg-secondaryBtn"
          >
            <div className="pb-2 bg-secondaryBtn">
              <img
                src={drupal}
                alt=""
                className="w-10 bg-secondaryBtn md:w-14 lg:w-20"
              />
            </div>
            <div>
              <p className="font-semibold bg-secondaryBtn font-spartan md:text-xl lg:text-2xl">
                Drupal
              </p>
            </div>
          </div>
          <div
            id="javascript"
            className="flex flex-col items-center mx-w-10 bg-secondaryBtn"
          >
            <div className="pb-2 bg-secondaryBtn">
              <img
                src={git}
                alt=""
                className="w-10 bg-secondaryBtn md:w-14 lg:w-20"
              />
            </div>
            <div>
              <p className="font-semibold bg-secondaryBtn font-spartan md:text-xl lg:text-2xl">
                Git
              </p>
            </div>
          </div>
          <div
            id="javascript"
            className="flex flex-col items-center mx-w-10 bg-secondaryBtn"
          >
            <div className="pb-2 bg-secondaryBtn">
              <img
                src={photoshop}
                alt=""
                className="w-10 bg-secondaryBtn md:w-14 lg:w-20"
              />
            </div>
            <div>
              <p className="font-semibold bg-secondaryBtn font-spartan md:text-xl lg:text-2xl">
                Photoshop
              </p>
            </div>
          </div>
          <div
            id="javascript"
            className="flex flex-col items-center mx-w-10 bg-secondaryBtn"
          >
            <div className="pb-2 bg-secondaryBtn">
              <img
                src={litmus}
                alt=""
                className="w-10 bg-secondaryBtn md:w-14 lg:w-20"
              />
            </div>
            <div>
              <p className="font-semibold bg-secondaryBtn font-spartan md:text-xl lg:text-2xl">
                Litmus
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Services */}
      <div className="flex flex-col items-center justify-center mt-5 mb-10 bg-secondaryBtn lg:mt-24">
        <div className="pt-6 bg-secondaryBtn">
          <h1 className="text-2xl underline bg-secondaryBtn font-spartan decoration-main decoration-4 md:text-4xl lg:text-5xl">
            Services
          </h1>
        </div>
        <div className="lg:flex lg:flex-row ">
          <div className="flex flex-col items-center py-8 text-center bg-secondaryBtn">
            <img
              src={responsive}
              alt="responsive"
              className="w-48 bg-secondaryBtn md:w-72 "
            />
            <h1 className="py-3 text-3xl font-semibold bg-secondaryBtn font-spartan md:text-4xl lg:text-5xl">
              Responsive
            </h1>
            <p className="px-6 text-xl bg-secondaryBtn font-spartan md:text-2xl md:px-24 lg:text-3xl">
              Designs are crafted to ensure compatibility across a wide spectrum
              of device types.
            </p>
          </div>
          <div className="flex flex-col items-center py-8 text-center bg-secondaryBtn">
            <img
              src={seo}
              alt="seo"
              className="w-48 bg-secondaryBtn md:w-72 "
            />
            <h1 className="py-3 text-3xl font-semibold bg-secondaryBtn font-spartan md:text-4xl lg:text-5xl">
              SEO
            </h1>
            <p className="px-6 text-xl bg-secondaryBtn font-spartan md:text-2xl md:px-24 lg:text-3xl">
              Enhance the discoverability of your website to reach a diverse and
              widespread online audience.
            </p>
          </div>
          <div className="flex flex-col items-center py-8 text-center bg-secondaryBtn">
            <img
              src={frontend}
              alt="frontend"
              className="w-48 bg-secondaryBtn md:w-72 "
            />
            <h1 className="py-3 text-3xl font-semibold bg-secondaryBtn font-spartan md:text-4xl lg:text-5xl">
              Front-End Design
            </h1>
            <p className="px-6 text-xl bg-secondaryBtn font-spartan md:text-2xl md:px-24 lg:text-3xl">
              Conducting design and testing procedures for both email and web
              platforms.
            </p>
          </div>
        </div>
      </div>
      {/* Process */}
      <div>
        <div className="pt-6 bg-secondaryBtn">
          <h1 className="text-2xl text-center underline bg-secondaryBtn font-spartan decoration-main decoration-4 md:text-4xl lg:text-5xl lg:mt-20">
            Process
          </h1>
        </div>
      </div>
      <div className="px-2 pb-4 bg-secondaryBtn lg:flex lg:justify-center lg:py-8 lg:mb-16">
        {/* Plan & Discuss */}
        <div className="flex items-center justify-around py-4 bg-secondaryBtn">
          <div className="flex flex-col items-center justify-center w-32 h-32 rounded-full bg-main md:w-64 md:h-64 lg:w-44 lg:h-44">
            <img
              src={discuss}
              alt="discuss"
              className="w-20 bg-transparent rounded-full md:w-52 lg:w-32"
            />
            <p className="pt-2 text-xl text-white bg-transparent font-spartan md:text-3xl">
              Discuss
            </p>
          </div>
          <div className="bg-secondaryBtn">
            <i className="text-2xl fa-solid fa-arrow-right-long bg-secondaryBtn md:text-4xl lg:px-2"></i>
          </div>
          <div className="flex flex-col items-center justify-center w-32 h-32 rounded-full bg-primaryBtn md:w-64 md:h-64 lg:w-44 lg:h-44">
            <img
              src={plan}
              alt="plan"
              className="w-20 bg-transparent md:w-52 lg:w-32"
            />
            <p className="pt-2 text-xl text-white bg-transparent font-spartan md:text-3xl">
              Plan
            </p>
          </div>
          <div>
            <div className="hidden lg:block bg-secondaryBtn">
              <i className="text-2xl fa-solid fa-arrow-right-long bg-secondaryBtn md:text-4xl lg:hidden"></i>
            </div>
            <div className="lg:hidden bg-secondaryBtn">
              <i className="text-2xl fa-solid fa-arrow-turn-down bg-secondaryBtn md:text-4xl"></i>
            </div>
          </div>
        </div>
        {/* Design & Test */}
        <div className="flex flex-row-reverse items-center justify-around py-4 bg-secondaryBtn">
          <div>
            <div className="hidden lg:block bg-secondaryBtn">
              <i className="text-2xl fa-solid fa-arrow-right-long bg-secondaryBtn md:text-4xl lg:px-2"></i>
            </div>
            <div className="lg:hidden bg-secondaryBtn">
              <i className="text-2xl rotate-90 fa-solid fa-arrow-turn-down bg-secondaryBtn md:text-4xl"></i>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-32 h-32 rounded-full bg-primaryBtn md:w-64 md:h-64 lg:w-44 lg:h-44">
            <img
              src={develop}
              alt="develop"
              className="w-20 bg-transparent md:w-52 lg:w-32"
            />
            <p className="pt-2 text-xl text-white bg-transparent font-spartan md:text-3xl">
              Design
            </p>
          </div>
          <div className="bg-secondaryBtn">
            <i className="hidden text-2xl fa-solid fa-arrow-right-long bg-secondaryBtn md:text-4xl lg:block lg:px-2"></i>
          </div>
          <div className=" bg-secondaryBtn">
            <i className="text-2xl rotate-180 fa-solid fa-arrow-right-long bg-secondaryBtn md:text-4xl lg:hidden"></i>
          </div>
          <div className="flex flex-col items-center justify-center w-32 h-32 rounded-full bg-primaryBtn md:w-64 md:h-64 lg:w-44 lg:h-44">
            <img
              src={testing}
              alt="discuss"
              className="w-20 bg-transparent md:w-52 lg:w-32"
            />
            <p className="pt-2 text-xl text-white bg-transparent font-spartan md:text-3xl">
              Testing
            </p>
          </div>
          <div>
            <div className="hidden lg:block bg-secondaryBtn">
              <i className="text-2xl fa-solid fa-arrow-right-long bg-secondaryBtn md:text-4xl lg:px-2"></i>
            </div>
            <div className="lg:hidden bg-secondaryBtn">
              <i className="text-2xl fa-solid fa-arrow-turn-down fa-flip-horizontal bg-secondaryBtn md:text-4xl"></i>
            </div>
          </div>
        </div>
        {/* Develop & Deploy */}
        <div className="flex flex-row-reverse items-center justify-around py-4 bg-secondaryBtn">
          <div className="flex flex-col items-center justify-center w-32 h-32 rounded-full bg-main md:w-64 md:h-64 lg:w-44 lg:h-44">
            <img
              src={deploy}
              alt="plan"
              className="w-20 bg-transparent md:w-52 lg:w-32"
            />
            <p className="text-xl text-white bg-transparent font-spartan">
              Deploy
            </p>
          </div>
          <div className=" bg-secondaryBtn">
            <i className="text-2xl rotate-180 fa-solid fa-arrow-left-long bg-secondaryBtn md:text-4xl lg:px-2"></i>
          </div>
          <div className="flex flex-col items-center justify-center w-32 h-32 rounded-full bg-primaryBtn md:w-64 md:h-64 lg:w-44 lg:h-44">
            <img
              src={develop}
              alt="develop"
              className="w-20 bg-transparent md:w-52 lg:w-32"
            />
            <p className="pt-2 text-xl text-white bg-transparent font-spartan md:text-3xl">
              Develop
            </p>
          </div>
          <div>
            <div className="hidden lg:block bg-secondaryBtn">
              <i className="text-2xl fa-solid fa-arrow-right-long bg-secondaryBtn md:text-4xl lg:hidden"></i>
            </div>
            <div className="lg:hidden bg-secondaryBtn">
              <i className="text-2xl fa-solid fa-arrow-turn-up fa-rotate-90 bg-secondaryBtn md:text-4xl"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
