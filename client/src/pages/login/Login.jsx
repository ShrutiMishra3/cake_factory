import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom'; 

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

var dataBadge;

const Login = () => {
  const onSubmit = async (values) => {
    try {
      // Send a POST request to your login endpoint
      const response = await fetch('http://ec2-13-235-71-128.ap-south-1.compute.amazonaws.com:5500/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        console.log("RES: ", response);
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      dataBadge = data.message;
      if (!data.success) {
    //     // Display a red badge if data.message is "Incorrect password or email"
    //     const messageBadge = data.message === "Incorrect password or email" ? (
    //       <span className="badge bg-danger">Error</span>
    //     ) : null;

        alert(data.message); // Display the message
        console.log('Login unsuccessful', data);
        console.log('Login successful', data);

        // You can handle the login success here, such as storing authentication tokens
      }
    } catch (error) {
      console.error('Error during login:', error);
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

          {/* Render the badge conditionally */}
          {dataBadge === "Incorrect password or email" && (
            <div className="mb-3">
              <span className="badge bg-danger">Error</span>
            </div>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
