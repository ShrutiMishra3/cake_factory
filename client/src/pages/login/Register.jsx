import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    address: {
      street: '',
      city: '',
      state: '',
      country: '',
      postalCode: '',
    },
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    address: Yup.object().shape({
      street: Yup.string().required('Street is required'),
      city: Yup.string().required('City is required'),
      state: Yup.string().required('State is required'),
      country: Yup.string().required('Country is required'),
      postalCode: Yup.string().required('Postal code is required'),
    }),
  });

  const onSubmit = (values) => {
    // Send a POST request to your server
    fetch('http://localhost:5500/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Registration successful', data);
        // You can perform actions after successful registration, such as redirecting the user
      })
      .catch((error) => {
        console.error('Error during registration:', error);
        // Handle registration error, e.g., display an error message to the user
      });
  };

  return (
    <div className="container">
      <h1 className="my-4">Registration</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <Field type="text" name="name" id="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <Field type="email" name="email" id="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <Field type="password" name="password" id="password" className="form-control" />
            <ErrorMessage name="password" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <h2>Address</h2>
            <div className="mb-3">
              <label htmlFor="street" className="form-label">Street</label>
              <Field type="text" name="address.street" id="street" className="form-control" />
              <ErrorMessage name="address.street" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label htmlFor="city" className="form-label">City</label>
              <Field type="text" name="address.city" id="city" className="form-control" />
              <ErrorMessage name="address.city" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label htmlFor="state" className="form-label">State</label>
              <Field type="text" name="address.state" id="state" className="form-control" />
              <ErrorMessage name="address.state" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label htmlFor="country" className="form-label">Country</label>
              <Field type="text" name="address.country" id="country" className="form-control" />
              <ErrorMessage name="address.country" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label htmlFor="postalCode" className="form-label">Postal Code</label>
              <Field type="text" name="address.postalCode" id="postalCode" className="form-control" />
              <ErrorMessage name="address.postalCode" component="div" className="text-danger" />
            </div>
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-primary">Register</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
