import React, { useEffect } from "react";
import "./Contactus.css";
import { Formik, Form, Field, useField } from "formik";
import * as yup from "yup";
import Map from "../../assets/images/map.png";
import Pin from "../../assets/images/location.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
toast.configure();

const Contactus = (props) => {
  const handleContact = (values) => {
    console.log("valuessss handeleContact", values);
    let data = {};
    data["message"] = values.comment;
    data["email"] = values.email;
    axios
      .post("https://jurisera.bit68.com/api/contactus/", data)
      .then(async (Response) => {
        console.log("successfully ", Response);
        toast.success("Data saved Successfully");
      })
      .catch((error) => {
        console.log("error in contact us", error);
      });
  };
  const MyTextArea = ({ ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
      <>
        {/* <label htmlFor={props.id || props.name}>{label}</label> */}
        <textarea className="form-control testt" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="errorMessage p-0">{meta.error}</div>
        ) : null}
      </>
    );
  };
  useEffect(() => {
    console.log("nav ", props.history.location.state?.selected_div);
    if (props.history.location.state?.selected_div == "contact-up") {
      const divElement = document.getElementById("contact-up");
      divElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <div className="container" id="contact-up">
      <Formik
        initialValues={{
          comment: "",
          email: "",
        }}
        validationSchema={yup.object().shape({
          comment: yup
            .string()
            .min(10, "Must be 10 characters or more")
            .required("Message is required"),
          email: yup
            .string()
            .email("Please enter valid email")
            .required("Email Address is Required"),
        })}
        onSubmit={(values) => handleContact(values)}
      >
        {({ errors, touched }) => (
          <Form className="mb-5 mt-5">
            <div className="col-12">
              <div className="row m-0">
                <MyTextArea
                  // label="First Name"
                  name="comment"
                  rows="13"
                  placeholder="Write your message here"
                />
              </div>
            </div>
            <div className=" row m-0">
              <div className="col-lg-6 col-sm-12">
                <div className="row">
                  <Field
                    className="form-control testt "
                    type="text"
                    placeholder="Your email"
                    name="email"
                  />
                  {errors.email && touched.email ? (
                    <div className="errorMessage p-0">{errors.email}</div>
                  ) : null}
                </div>
              </div>
              <div className=" col-lg-6 col-sm-12 p-0 mt-3 d-flex justify-content-end">
                <button type="submit" className="contact-btn">
                  Send
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <div className="row ">
        <div className="col-lg-4">
          <div className="find-us-title">Find us</div>
          <div className="row mt-4">
            <div>
              <img
                className="image-space"
                src={Pin}
                alt="pin-icon"
                style={{
                  width: 20,
                  height: 20,
                  margin: "auto",
                  marginBottom: 7,
                  marginRight: 10,
                }}
              />
              <a
                className=" address-style"
                href="https://maps.app.goo.gl/cLZ9VjqUhXUG1FP1A"
                target="_blank"
                rel="noreferrer "
              >
                16 Street 254, Maadi as Sarayat Al Gharbeyah, Maadi, Cairo,
                Egypt
              </a>
            </div>
          </div>
        </div>
        {/* <a
          className="col-lg-8 d-flex justify-content-end mb-5"
          // href="https://maps.app.goo.gl/cLZ9VjqUhXUG1FP1A"
          // target="_blank"
          // rel="noreferrer "
        >
          <iframe
            className="m-1"
            width="520"
            height="315"
            src="https://maps.app.goo.gl/cLZ9VjqUhXUG1FP1A"
          ></iframe>
        </a> */}

        <div className="col-lg-8 d-flex justify-content-end mb-5">
          <iframe
            src="https://maps.google.com/maps?q=16%20Street%20254,%20Maadi%20as%20Sarayat%20Al%20Gharbeyah,%20Maadi,%20Cairo,%20Egypt&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
      </div>
    </div>
  );
};
export default Contactus;
