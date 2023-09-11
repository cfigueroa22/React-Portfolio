import { FaGithub, FaRegWindowRestore } from "react-icons/fa";
import grounds from "../../src/assets/groundsco-project.png";
import taskhub from "../../src/assets/taskhub-project.png";
import employlink from "../../src/assets/employlink-projects.png";

const Projects = () => {
  return (
    <div className="px-7 mt-16 md:px-10 my-8" id="projects">
      <h1 className="font-lato flex text-4xl font-semibold mx-auto justify-center pb-5">
        Projects
      </h1>
      <div className="bg-secondaryBtn p-5 rounded-2xl lg:flex lg:flex-row lg:mx-14 lg:gap-4">
        <div className="bg-secondaryBtn lg:flex-1">
          <div className="bg-secondaryBtn">
            <img src={employlink} alt="" className="rounded-xl"></img>
          </div>
          <div className="bg-secondaryBtn flex justify-end py-3 lg:justify-start">
            <a
              className="px-2 bg-secondaryBtn"
              href="https://github.com/cfigueroa22/Admin-Dashboard"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                size={20}
                className="cursor-pointer bg-secondaryBtn hover:text-primaryBtn"
              />
            </a>
            <a
              className="px-2 bg-secondaryBtn"
              href="https://employlink.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <FaRegWindowRestore
                size={20}
                className="cursor-pointer bg-secondaryBtn hover:text-primaryBtn"
              />
            </a>
          </div>
        </div>
        <div className="bg-secondaryBtn lg:flex-1 lg:content-center">
          <h1 className="bg-secondaryBtn font-lato font-extrabold text-2xl lg:text-3xl ">
            EmployLink
          </h1>
          <h3 className="bg-secondaryBtn font-lato text-sm text-gray-500 py-1 lg:text-base">
            Admin Dashboard
          </h3>
          <p className="bg-secondaryBtn font-lato text-sm lg:text-base">
            This is an Admin Dashboard with CRUD functionality. By integrating
            React, Node.js, TailwindCSS, and MySQL, I engineered an intuitive
            dashboard for efficient employee, ticket, and project management. I
            improved my skills in crafting dynamic UIs, managing databases, and
            orchestrating smooth interactions between front-end and back-end
            systems.
          </p>
          <div className="flex flex-wrap bg-secondaryBtn pt-4">
            <p className="px-2 m-1 bg-black text-sm text-white rounded-full">
              React.js
            </p>

            <p className="px-2 m-1 bg-black text-sm text-white rounded-full">
              TailwindCSS
            </p>
            <p className="px-2 m-1 bg-black text-sm text-white rounded-full">
              Node.js
            </p>
            <p className="px-2 m-1 bg-black text-sm text-white rounded-full">
              Express
            </p>

            <p className="px-2 m-1 bg-black text-sm text-white rounded-full">
              MySQL
            </p>
            <p className="px-2 m-1 bg-black text-sm text-white rounded-full">
              Axios
            </p>
          </div>
        </div>
      </div>
      <div className="bg-secondaryBtn p-5 mt-7 rounded-2xl lg:flex lg:flex-row-reverse lg:mx-14 lg:gap-4">
        <div className="bg-secondaryBtn lg:flex-1">
          <div className="bg-secondaryBtn">
            <img src={grounds} alt="" className="rounded-xl"></img>
          </div>
          <div className="bg-secondaryBtn flex justify-end py-3">
            <a
              className="px-2 bg-secondaryBtn"
              href="https://github.com/cfigueroa22/JS-Ecommerce"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                size={20}
                className="cursor-pointer bg-secondaryBtn hover:text-primaryBtn"
              />
            </a>
            <a
              className="px-2 bg-secondaryBtn"
              href="https://groundscoffee.online/"
              target="_blank"
              rel="noreferrer"
            >
              <FaRegWindowRestore
                size={20}
                className="cursor-pointer bg-secondaryBtn hover:text-primaryBtn"
              />
            </a>
          </div>
        </div>
        <div className="bg-secondaryBtn lg:flex-1 lg:content-center">
          <h1 className="bg-secondaryBtn font-lato font-extrabold text-2xl lg:text-3xl ">
            Grounds & Co.
          </h1>
          <h3 className="bg-secondaryBtn font-lato text-sm text-gray-500 py-1 lg:text-base">
            E-Commerce Website
          </h3>
          <p className="bg-secondaryBtn font-lato text-sm lg:text-base">
            This project showcases my experience in JavaScript and local
            storage. The website is an e-commerce platform selling coffee
            products and accessories, featuring cart and checkout
            functionalities. It reflects my commitment to mastering modern web
            development and delivering elegant solutions.
          </p>
          <div className="flex flex-wrap bg-secondaryBtn pt-4">
            <p className="px-2 m-1 bg-black text-sm text-white rounded-full">
              JavaScript
            </p>
            <p className="px-2 m-1 bg-black text-sm text-white rounded-full">
              HTML/CSS
            </p>

            <p className="px-2 m-1 bg-black text-sm text-white rounded-full">
              LocalStorage
            </p>
          </div>
        </div>
      </div>
      <div className="bg-secondaryBtn p-5 mt-7 rounded-2xl lg:flex lg:flex-row lg:mx-14 lg:gap-4">
        <div className="bg-secondaryBtn lg:flex-1">
          <div className="bg-secondaryBtn">
            <img src={taskhub} alt="" className="rounded-xl"></img>
          </div>
          <div className="bg-secondaryBtn flex justify-end py-3 lg:justify-start">
            <a
              className="px-2 bg-secondaryBtn"
              href="https://github.com/cfigueroa22/TaskTracker"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                size={20}
                className="cursor-pointer bg-secondaryBtn hover:text-primaryBtn"
              />
            </a>
            <a
              className="px-2 bg-secondaryBtn"
              href="http://taskshub.online/"
              target="_blank"
              rel="noreferrer"
            >
              <FaRegWindowRestore
                size={20}
                className="cursor-pointer bg-secondaryBtn hover:text-primaryBtn"
              />
            </a>
          </div>
        </div>
        <div className="bg-secondaryBtn lg:flex-1 lg:content-center">
          <h1 className="bg-secondaryBtn font-lato font-extrabold text-2xl lg:text-3xl ">
            TaskHub
          </h1>
          <h3 className="bg-secondaryBtn font-lato text-sm text-gray-500 py-1 lg:text-base">
            Task Tracker
          </h3>
          <p className="bg-secondaryBtn font-lato text-sm lg:text-base">
            Built with JavaScript and HTML/CSS, this dynamic project utilizes
            local storage to save tasks. Users can effortlessly input tasks,
            assign priority levels, and watch as the app color-codes them
            accordingly. The interface includes an edit feature for task
            management and a convenient checkbox for quick deletion.
          </p>
          <div className="flex flex-wrap bg-secondaryBtn pt-4">
            <p className="px-2 m-1 bg-black text-sm text-white rounded-full">
              JavaScript
            </p>
            <p className="px-2 m-1 bg-black text-sm text-white rounded-full">
              HTML/CSS
            </p>

            <p className="px-2 m-1 bg-black text-sm text-white rounded-full">
              LocalStorage
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
