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
    <div className="px-7 md:px-28 my-10" id="contact">
      <div className="md:flex">
        {/* Text and Icons */}
        <div className="md:flex-1 md:bg-secondaryBtn md:p-5 md:rounded-l-xl">
          <h1 className="font-lato text-3xl font-semibold text-main md:bg-secondaryBtn">
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
                size={28}
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
                size={28}
                className="hover:text-primaryBtn md:bg-secondaryBtn"
              />
            </a>
          </div>
        </div>
        {/* Contact Form */}
        <div className="mt-10  md:mt-0 md:flex-1  md:bg-secondaryBtn md:p-5 md:rounded-r-xl">
          <p className="font-lato mb-4 text-2xl md:mb-6 md:bg-secondaryBtn">
            Get in touch here:
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            <Form
              onSubmit={sendEmail}
              ref={form}
              className="flex flex-col md:bg-secondaryBtn"
            >
              <Field
                type="text"
                name="user_name"
                placeholder="Name"
                autoComplete="off"
                className="border-b-2 border-main focus:outline-none md:bg-secondaryBtn"
              />
              <ErrorMessage
                name="user_name"
                component="span"
                className="text-red-500 md:bg-secondaryBtn"
              />
              <Field
                type="email"
                name="user_email"
                placeholder="Email"
                autoComplete="off"
                className="border-b-2 border-main pt-4 focus:outline-none md:bg-secondaryBtn"
              />
              <ErrorMessage
                name="user_email"
                component="span"
                className="text-red-500 md:bg-secondaryBtn"
              />
              <Field
                as="textarea"
                name="message"
                placeholder="Message"
                className="border-b-2 border-main mt-8 focus:outline-none resize-none md:bg-secondaryBtn"
              />
              <ErrorMessage
                name="message"
                component="span"
                className="text-red-500 md:bg-secondaryBtn"
              />
              <div id="text-box"></div>
              <button
                type="submit"
                value="Send"
                className="font-lato bg-primaryBtn py-3 w-40 rounded-lg mx-auto mt-5 hover:bg-black hover:text-white trasition-all duration-500"
              >
                Send Message
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;
