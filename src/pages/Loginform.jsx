import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useContext } from 'react';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom'; 
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';


const fields = [
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'password', label: 'Password', type: 'password' },
];

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required.'),
  password: Yup.string().min(8, 'Minimum 8 characters').max(30, 'Maximum 30 characters').required('Password is required.'),
});

const LoginForm = () => {
  const navigate = useNavigate();  
  const { login } = useContext(AuthContext);  

  // Handle form submission
  const handleLogin = async (values) => {
    try {
      const response = await axios.post('https://blog-hqx2.onrender.com/user/login', values);
      toast.success("Login successful");
      login(response.data.token, response.data.user); 
      navigate('/blogs');  
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400">
      <div className="max-w-md bg-white p-8 rounded-3xl m-10 w-full shadow-md">
        <h2 className="font-bold mb-6 text-center text-2xl">Login</h2>
        <Formik
          initialValues={{ email: '', password: '', remember: false }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
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

            <div className="flex items-center justify-between text-sm mt-4">
              <label className="flex items-center text-gray-700">
                <Field
                  type="checkbox" name="remember" className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
                Remember me
              </label>
              <Link to="/forgot-password" className="text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full h-10 mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Log in
            </button>

            <button 
              type="button" 
              className="w-full h-10 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200 flex items-center justify-center gap-2"
              onClick={() => alert('Google login clicked')}
            >
              <FcGoogle className="text-xl" />
              Continue with Google
            </button>

            <p className="text-center text-sm mt-4">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 hover:underline">
                Register
              </Link>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
