import aboutMe from "../../src/assets/meTwo.png";
import js from "../../src/assets/js-icon.svg";
import node from "../../src/assets/node-icon.svg";
import reactIcon from "../../src/assets/react-icon.svg";
import tailwind from "../../src/assets/tailwind-icon.svg";
import sql from "../../src/assets/sql-icon.svg";
import html from "../../src/assets/html-icon.svg";
import css from "../../src/assets/css-icon.svg";
import git from "../../src/assets/git-icon.svg";
import drupal from "../../src/assets/new-drupal-icon.svg";
import bootstrap from "../../src/assets/bootstrap-icon.png";
import php from "../../src/assets/php-icon.png";
import wordpress from "../../src/assets/wordpress-logo.png";

const About = () => {
  return (
    <div
      className="bg-secondaryBtn pb-1 m-4 lg:m-4 xlg:m-4 md:mx-8 rounded-xl  md:mt-24 lg:bg-transparent"
      id="about"
    >
      <div className="flex flex-col-reverse items-center m-10 md:m-24 lg:gap-3 lg:flex-row lg:rounded-2xl md:bg-secondaryBtn lg:bg-secondaryBtn">
        <div className="lg:flex-1 lg:m-5 bg-secondaryBtn md:pt-5">
          <img src={aboutMe} alt="about" className="rounded-lg"></img>
        </div>
        <div className="lg:flex-1 bg-secondaryBtn md:rounded-r-2xl">
          <h1 className="font-lato flex text-3xl mt-5 font-semibold mx-auto justify-center bg-secondaryBtn">
            About Me
          </h1>
          <p className="flex mx-auto justify-center font-lato my-2 leading-[2] bg-secondaryBtn lg:pr-2 lg:text-lg">
            I am a passionate learner aspiring to become a well-rounded
            developer. I have been using JavaScript, React, Tailwind CSS, and
            backend technologies, I enjoy creating engaging full-stack projects.
            I am adaptable, possess strong problem-solving skills, and thrive in
            collaborative environments. Committed to delivering innovative
            solutions and making a meaningful impact in my career.
          </p>
          <div className="flex flex-col bg-secondaryBtn lg:rounded-r-2xl">
            <div className="flex align-center justify-center bg-secondaryBtn">
              <div>
                <img
                  src={html}
                  alt=""
                  className="bg-secondaryBtn p-3 w-40"
                ></img>
              </div>
              <div>
                <img
                  src={css}
                  alt=""
                  className="bg-secondaryBtn p-3 w-40"
                ></img>
              </div>
              <div>
                <img src={js} alt="" className="bg-secondaryBtn p-3 w-40"></img>
              </div>
              <div>
                <img
                  src={reactIcon}
                  alt=""
                  className="bg-secondaryBtn p-3 w-40"
                ></img>
              </div>
            </div>
            <div className="flex align-center justify-center bg-secondaryBtn">
              <div>
                <img
                  src={tailwind}
                  alt=""
                  className="bg-secondaryBtn p-3 w-40"
                ></img>
              </div>
              <div>
                <img
                  src={bootstrap}
                  alt=""
                  className="bg-secondaryBtn p-3 w-40"
                ></img>
              </div>
              <div>
                <img
                  src={node}
                  alt=""
                  className="bg-secondaryBtn p-3 w-40"
                ></img>
              </div>
              <div>
                <img
                  src={sql}
                  alt=""
                  className="bg-secondaryBtn p-3 w-40"
                ></img>
              </div>
            </div>

            <div className="flex align-center justify-center bg-secondaryBtn rounded-br-lg">
              <div>
                <img
                  src={git}
                  alt=""
                  className="bg-secondaryBtn p-3 w-40"
                ></img>
              </div>
              <div>
                <img
                  src={php}
                  alt=""
                  className="bg-secondaryBtn p-3 w-40"
                ></img>
              </div>
              <div>
                <img
                  src={wordpress}
                  alt=""
                  className="bg-secondaryBtn p-3 w-40"
                ></img>
              </div>
              <div>
                <img
                  src={drupal}
                  alt=""
                  className="bg-secondaryBtn p-3 w-40"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
