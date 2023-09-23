import { React, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom"; // Import useNavigate
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
  address: {
    street: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
  },
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  address: Yup.object().shape({
    street: Yup.string().required("Street is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    country: Yup.string().required("Country is required"),
    postalCode: Yup.string().required("Postal code is required"),
  }),
});

const Register = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const [registrationError, setRegistrationError] = useState(""); // State to store registration error message

  const onSubmit = (values) => {
    // Send a POST request to your server
    fetch(import.meta.env.VITE_APP_ORIGIN + "/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          console.log(response);
          alert(response.status);
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Registration response:", data);
        if (!data.success) {
          setRegistrationError(data.message); // Set registration error message
        } else {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Error during registration:", error);
        // Handle registration error, e.g., display an error message to the user
      });
  };

  // Function to handle the back button click
  const handleBackClick = () => {
    navigate(-1); // Use navigate(-1) to navigate back to the previous page
  };

  return (
    <div className="container">
      <button  className="btn btn-sm btn-outline-dark m-2" onClick={handleBackClick}>
      <i className="fa-solid fa-reply"></i> Back
      </button>
      <h1 className="my-4">Registration</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <Field type="text" name="name" id="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              className="form-control"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <Field
              type="password"
              name="password"
              id="password"
              className="form-control"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="mb-3">
            <h2>Address</h2>
            <div className="mb-3">
              <label htmlFor="street" className="form-label">
                Street
              </label>
              <Field
                type="text"
                name="address.street"
                id="street"
                className="form-control"
              />
              <ErrorMessage
                name="address.street"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <Field
                type="text"
                name="address.city"
                id="city"
                className="form-control"
              />
              <ErrorMessage
                name="address.city"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="state" className="form-label">
                State
              </label>
              <Field
                type="text"
                name="address.state"
                id="state"
                className="form-control"
              />
              <ErrorMessage
                name="address.state"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <Field
                type="text"
                name="address.country"
                id="country"
                className="form-control"
              />
              <ErrorMessage
                name="address.country"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="postalCode" className="form-label">
                Postal Code
              </label>
              <Field
                type="text"
                name="address.postalCode"
                id="postalCode"
                className="form-control"
              />
              <ErrorMessage
                name="address.postalCode"
                component="div"
                className="text-danger"
              />
            </div>
          </div>

          <div className="mb-3">
            {/* Use Link component to navigate to /login */}
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          {registrationError && (
              <div className="mb-3">
                <div className="alert alert-danger" role="alert">
                  {registrationError}, <Link to="/login">Login Here</Link>
                </div>
              </div>
            ) || (
              <small>
                Already have an account? <Link to="/login">Login Here</Link>
              </small>
            )}
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
