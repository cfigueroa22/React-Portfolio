import { FaGithub, FaRegWindowRestore } from "react-icons/fa";
import grounds from "../../src/assets/groundsco-project.png";
import taskhub from "../../src/assets/taskhub-project.png";
import employlink from "../../src/assets/employlink-projects.png";
import { useState } from "react";

const Projects = () => {
  let { hoverLive, setHoverLive } = useState(false);

  const handleHoverLive = () => {
    setHoverLive(!hoverLive);
  };

  return (
    <div className="pb-20 px-7 md:px-10 lg:mt-32" id="projects">
      <h1
        id="projects"
        className="flex justify-center py-6 mx-auto text-5xl font-semibold font-spartan lg:text-7xl"
      >
        Projects
      </h1>
      <div className="flex py-2 justify-evenly">
        <div>
          <h1 className="text-xl font-medium lg:text-4xl hover:cursor-pointer font-spartan">
            All
          </h1>
        </div>
        <div>
          <h1 className="text-xl font-medium lg:text-4xl hover:cursor-pointer font-spartan">
            Website
          </h1>
        </div>
        <div>
          <h1 className="text-xl font-medium lg:text-4xl hover:cursor-pointer font-spartan">
            Email
          </h1>
        </div>
      </div>
      <div className="p-5 bg-secondaryBtn rounded-2xl lg:flex lg:flex-row lg:mx-14 lg:gap-4">
        <div className="bg-secondaryBtn lg:flex-1">
          <div className="bg-secondaryBtn">
            <a href="https://employlink.netlify.app/">
              <img
                src={employlink}
                alt=""
                className="rounded-xl hover:drop-shadow-2xl"
              ></img>
            </a>
          </div>

          <div className="flex justify-end py-3 bg-secondaryBtn lg:justify-start">
            <a
              className="px-2 bg-secondaryBtn"
              href="https://github.com/cfigueroa22/Admin-Dashboard"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                size={25}
                className="cursor-pointer text-code bg-secondaryBtn hover:text-primaryBtn"
              />
            </a>

            <a
              className="px-2 bg-secondaryBtn"
              href="https://employlink.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <FaRegWindowRestore
                onMouseEnter={handleHoverLive}
                size={25}
                className="cursor-pointer text-live bg-secondaryBtn hover:text-primaryBtn"
              />
            </a>
          </div>
        </div>
        <div className="bg-secondaryBtn lg:flex-1 lg:content-center">
          <h1 className="text-3xl font-bold bg-secondaryBtn font-spartan lg:text-5xl ">
            EmployLink
          </h1>
          <h3 className="py-1 text-lg text-gray-500 bg-secondaryBtn font-spartan lg:text-2xl">
            Admin Dashboard
          </h3>
          <p className="text-md bg-secondaryBtn font-spartan lg:text-xl">
            This is an Admin Dashboard with CRUD functionality. By integrating
            React, Node.js, TailwindCSS, and MySQL, I engineered an intuitive
            dashboard for efficient employee, ticket, and project management. I
            improved my skills in crafting dynamic UIs, managing databases, and
            orchestrating smooth interactions between front-end and back-end
            systems.
          </p>
          <div className="flex flex-wrap pt-4 bg-secondaryBtn">
            <p className="px-2 m-1 text-sm text-white bg-black rounded-full">
              React.js
            </p>

            <p className="px-2 m-1 text-sm text-white bg-black rounded-full">
              TailwindCSS
            </p>
            <p className="px-2 m-1 text-sm text-white bg-black rounded-full">
              Node.js
            </p>
            <p className="px-2 m-1 text-sm text-white bg-black rounded-full">
              Express
            </p>

            <p className="px-2 m-1 text-sm text-white bg-black rounded-full">
              MySQL
            </p>
            <p className="px-2 m-1 text-sm text-white bg-black rounded-full">
              Axios
            </p>
          </div>
        </div>
      </div>
      <div className="p-5 bg-secondaryBtn mt-7 rounded-2xl lg:flex lg:flex-row-reverse lg:mx-14 lg:gap-4">
        <div className="bg-secondaryBtn lg:flex-1">
          <div className="bg-secondaryBtn">
            <a href="https://groundscoffee.online/">
              <img
                src={grounds}
                alt=""
                className="rounded-xl hover:drop-shadow-2xl"
              ></img>
            </a>
          </div>
          <div className="flex justify-end py-3 bg-secondaryBtn">
            <a
              className="px-2 bg-secondaryBtn"
              href="https://github.com/cfigueroa22/JS-Ecommerce"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                size={25}
                className="cursor-pointer text-code bg-secondaryBtn hover:text-primaryBtn"
              />
            </a>
            <a
              className="px-2 bg-secondaryBtn"
              href="https://groundscoffee.online/"
              target="_blank"
              rel="noreferrer"
            >
              <FaRegWindowRestore
                size={25}
                className="cursor-pointer text-live bg-secondaryBtn hover:text-primaryBtn"
              />
            </a>
          </div>
        </div>
        <div className="bg-secondaryBtn lg:flex-1 lg:content-center">
          <h1 className="text-3xl font-bold bg-secondaryBtn font-spartan lg:text-5xl ">
            Grounds & Co.
          </h1>
          <h3 className="py-1 text-lg text-gray-500 bg-secondaryBtn font-spartan lg:text-2xl">
            E-Commerce Website
          </h3>
          <p className="text-md bg-secondaryBtn font-spartan lg:text-xl">
            This project showcases my experience in JavaScript and local
            storage. The website is an e-commerce platform selling coffee
            products and accessories, featuring cart and checkout
            functionalities. It reflects my commitment to mastering modern web
            development and delivering elegant solutions.
          </p>
          <div className="flex flex-wrap pt-4 bg-secondaryBtn">
            <p className="px-2 m-1 text-sm text-white bg-black rounded-full">
              JavaScript
            </p>
            <p className="px-2 m-1 text-sm text-white bg-black rounded-full">
              HTML/CSS
            </p>

            <p className="px-2 m-1 text-sm text-white bg-black rounded-full">
              LocalStorage
            </p>
          </div>
        </div>
      </div>
      <div className="p-5 bg-secondaryBtn mt-7 rounded-2xl lg:flex lg:flex-row lg:mx-14 lg:gap-4">
        <div className="bg-secondaryBtn lg:flex-1">
          <div className="bg-secondaryBtn">
            <a href="http://taskshub.online/">
              <img
                src={taskhub}
                alt=""
                className="rounded-xl hover:drop-shadow-2xl"
              ></img>
            </a>
          </div>
          <div className="flex justify-end py-3 bg-secondaryBtn lg:justify-start">
            <a
              className="px-2 bg-secondaryBtn"
              href="https://github.com/cfigueroa22/TaskTracker"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                size={25}
                className="cursor-pointer text-code bg-secondaryBtn hover:text-primaryBtn"
              />
            </a>
            <a
              className="px-2 bg-secondaryBtn"
              href="http://taskshub.online/"
              target="_blank"
              rel="noreferrer"
            >
              <FaRegWindowRestore
                size={25}
                className="cursor-pointer text-live bg-secondaryBtn hover:text-primaryBtn"
              />
            </a>
          </div>
        </div>
        <div className="bg-secondaryBtn lg:flex-1 lg:content-center">
          <h1 className="text-3xl font-bold bg-secondaryBtn font-spartan lg:text-5xl ">
            TaskHub
          </h1>
          <h3 className="py-1 text-lg text-gray-500 bg-secondaryBtn font-spartan lg:text-2xl">
            Task Tracker
          </h3>
          <p className="text-md bg-secondaryBtn font-spartan lg:text-xl">
            Built with JavaScript and HTML/CSS, this dynamic project utilizes
            local storage to save tasks. Users can effortlessly input tasks,
            assign priority levels, and watch as the app color-codes them
            accordingly. The interface includes an edit feature for task
            management and a convenient checkbox for quick deletion.
          </p>
          <div className="flex flex-wrap pt-4 bg-secondaryBtn">
            <p className="px-2 m-1 text-sm text-white bg-black rounded-full">
              JavaScript
            </p>
            <p className="px-2 m-1 text-sm text-white bg-black rounded-full">
              HTML/CSS
            </p>

            <p className="px-2 m-1 text-sm text-white bg-black rounded-full">
              LocalStorage
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
