import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required.'),
});

const ForgotPassword = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400">
      <div className="max-w-md bg-white p-8 rounded-3xl m-10 w-full shadow-md">
        <h2 className="font-bold mb-6 text-center text-2xl">Forgot Password</h2>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            alert(`Password reset link sent to: ${values.email}`);
          }}
        >
          <Form className="grid grid-cols-1 gap-5">
            <div>
              <label htmlFor="email" className="block font-bold">
                Email
              </label>
              <Field
                name="email"
                id="email"
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <button
              type="submit"
              className="w-full h-10 mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Send Reset Link
            </button>

            <p className="text-center text-sm mt-4">
              <Link to="/" className="text-blue-600 hover:underline">
                Back to Login
              </Link>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPassword;
