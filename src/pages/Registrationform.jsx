import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";


const fields = [
  { name: 'name', label: 'Username', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'password', label: 'Password', type: 'password' },
];

const validationSchema = Yup.object({
  name: Yup.string().min(4, 'Minimum 4 characters').max(40, 'Must be 40 characters or less').required('This field is required'),
  email: Yup.string().email('Invalid email address').required('Email is required.'),
  password: Yup.string().min(8, 'Minimum 8 characters').max(30, 'Maximum 30 characters').required('Password is required.'),
});

const Registrationform = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400 shadow-pink-500/50">
      <div className="max-w-md bg-white p-8 rounded-3xl m-10 w-full shadow-md">
        <h2 className="font-bold mb-6 text-center text-2xl">Create account</h2>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form className="grid grid-cols-1 gap-5">
            {fields.map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="block font-bold">
                  {field.label}
                </label>
                <Field
                  name={field.name}
                  id={field.name}
                  type={field.type}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name={field.name} component="div" className="text-red-500 text-sm mt-1" />
              </div>
            ))}

            <button
              type="submit"
              className="w-full h-10 mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Sign Up
            </button>
       <button type="button" className="w-full h-10 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200 flex items-center justify-center gap-2"
  onClick={() => alert('Google login clicked')}
    >
  <FcGoogle className="text-xl" />
  Continue with Google
</button>

            <p className="text-center text-sm mt-4">
              Already have an account?{' '}
              <Link to="/" className="text-blue-600 hover:underline">
                Log in
              </Link>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Registrationform;
