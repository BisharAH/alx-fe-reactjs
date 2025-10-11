import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// Change the yup import to be a named import
import { object, string } from 'yup';

// Yup validation schema using the named imports
const validationSchema = object({
  username: string()
    .max(15, 'Must be 15 characters or less')
    .required('Username is required'),
  email: string()
    .email('Invalid email address')
    .required('Email is required'),
  password: string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

function FormikForm() {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Simulate an API call
    console.log('Submitting Formik data:', values);
    setTimeout(() => {
      alert(`Formik registration successful for ${values.username}!`);
      setSubmitting(false);
      resetForm();
    }, 500);
  };

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <h2>Formik & Yup Form</h2>
          <div>
            <label htmlFor="username">Username:</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;