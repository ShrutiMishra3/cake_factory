import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(""); // State to store login error message

  const onSubmit = async (values) => {
    try {
      // Send a POST request to your login endpoint
      const response = await fetch(
        import.meta.env.VITE_APP_ORIGIN + "/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        console.log("RES: ", response);
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (!data.success) {
        setLoginError(data.message); // Set login error message
        console.log("Login unsuccessful", data);
      } else {
        console.log("Login successful", data);
        navigate("/");
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle login error, e.g., display an error message to the user
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              className={`form-control ${loginError ? "is-invalid" : ""}`} // Apply is-invalid class when there's a login error
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
              className={`form-control ${loginError ? "is-invalid" : ""}`} // Apply is-invalid class when there's a login error
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="mb-3 form-check">
            <Field
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              className="form-check-input"
            />
            <label htmlFor="rememberMe" className="form-check-label">
              Remember me
            </label>
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-primary me-2">
              Login
            </button>
            <Link to="/register" className="btn btn-primary">
              Register
            </Link>
          </div>

          {/* Render the error message conditionally */}
          {loginError && (
            <div className="mb-3">
              <div className="alert alert-danger" role="alert">
                {loginError}
              </div>
            </div>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
