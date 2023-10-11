import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4y8x657",
        "template_xsf1lx8",
        form.current,
        "F7t0pS5ErHxmlKyf3"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent! I will reply ASAP!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const initialValues = {
    user_email: "",
    message: "",
    user_name: "",
  };

  const validationSchema = Yup.object().shape({
    user_email: Yup.string().required("Don't forget your email!"),
    message: Yup.string().required("Enter your message before you send!"),
    user_name: Yup.string().required("Let me know who you are!"),
  });

  return (
    <div>
      <div className="my-10 px-7 md:px-24" id="contact">
        <div className=" md:flex">
          {/* Text and Icons */}
          <div className="md:flex-1 md:bg-secondaryBtn md:p-5 md:rounded-l-xl">
            <h1 className="text-3xl font-semibold font-spartan text-main md:bg-secondaryBtn lg:text-5xl lg:font-medium">
              Connect with me:
            </h1>
            {/* Social Icons */}
            <div className="flex mt-3 md:mt-2 md:bg-secondaryBtn">
              <a
                href="https://www.linkedin.com/in/cfigueroa1222"
                target="_blank"
                className="ml-4"
                rel="noreferrer"
              >
                <FaLinkedin
                  size={36}
                  className="hover:text-primaryBtn md:bg-secondaryBtn"
                />
              </a>
              <a
                href="https://github.com/cfigueroa22"
                target="_blank"
                className="ml-4"
                rel="noreferrer"
              >
                <FaGithub
                  size={36}
                  className="hover:text-primaryBtn md:bg-secondaryBtn"
                />
              </a>
            </div>
          </div>
          {/* Contact Form */}
          <div className="mt-10 md:mt-0 md:flex-1 md:bg-secondaryBtn md:p-5 md:rounded-r-xl">
            <p className="mb-4 text-2xl font-spartan md:mb-6 md:bg-secondaryBtn lg:text-4xl">
              Get in touch here:
            </p>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
            >
              <Form
                onSubmit={sendEmail}
                ref={form}
                className="md:bg-secondaryBtn"
              >
                <Field
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  autoComplete="off"
                  className="w-full border-b-2 border-main focus:outline-none md:bg-secondaryBtn lg:text-xl"
                />
                <ErrorMessage
                  name="user_name"
                  component="span"
                  className="w-full text-red-500 md:bg-secondaryBtn "
                />
                <Field
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  autoComplete="off"
                  className="w-full pt-4 border-b-2 border-main focus:outline-none md:bg-secondaryBtn lg:text-xl"
                />
                <ErrorMessage
                  name="user_email"
                  component="span"
                  className="w-full text-red-500 md:bg-secondaryBtn"
                />
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Message"
                  className="w-full mt-8 border-b-2 resize-none border-main focus:outline-none md:bg-secondaryBtn lg:text-xl"
                />
                <ErrorMessage
                  name="message"
                  component="span"
                  className="w-full text-red-500 md:bg-secondaryBtn"
                />
                <br />
                <div className="flex items-center justify-center md:bg-secondaryBtn">
                  <button
                    type="submit"
                    value="Send"
                    className="w-40 py-3 mx-auto mt-5 text-xl duration-500 rounded-lg font-spartan bg-primaryBtn hover:bg-black hover:text-white trasition-all lg:text-2xl"
                  >
                    Send Message
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
      <div className="flex w-full mx-auto bg-primaryBtn">
        <p className="m-3 mx-auto text-white bg-primaryBtn">
          &#169; Carlos Figueroa
        </p>
      </div>
    </div>
  );
};

export default Contact;
