import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// Use named imports for object and string from yup
import { object, string } from 'yup';

// The validation schema now uses string() and object() directly
const validationSchema = object({
  username: string().required
    .max(15, 'Must be 15 characters or less')
    .required('Username is required'),
  email: string().required
    .email('Invalid email address')
    .required('Email is required'),
  password: string().required
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

function FormikForm() {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
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