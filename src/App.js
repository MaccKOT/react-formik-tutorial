/* eslint react/prop-types: 0 */

import React from 'react';
import { hot } from 'react-hot-loader/root';

import { Styles } from './Styles';
import { Formik, useField, Form } from 'formik';
import * as Yup from 'yup'; //validation schema lib

//Custom components
const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className='text-input' {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  );
};

const CustomCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props, 'checkbox');

  return (
    <>
      <label className='checkbox'>
        <input type='checkbox' {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  );
};

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  );
};

function App() {
  return (
    <Styles>
      <Formik
        initialValues={{
          name: '',
          email: '',
          acceptedTerms: false,
          specialPower: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, 'Must be at least 3 charasters')
            .max(15, 'Must be 15 charasters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept terms'),
          specialPower: Yup.string()
            .oneOf(
              ['flight', 'invicibility', 'wealthy bat guy', 'other'],
              'Invalid special power'
            )
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          //Send form to API emulation
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            resetForm();
          }, 1500);
        }}>
        {(props) => (
          <Form>
            <h1>Sign Up</h1>
            <CustomTextInput
              label='Name'
              name='name'
              type='text'
              placeholder='John Doe'
            />
            <CustomTextInput
              label='Email'
              name='email'
              type='email'
              placeholder='johndoe@mail.com'
            />
            <CustomSelect label='Special power' name='specialPower'>
              <option value=''>Select a special power</option>
              <option value='flight'>Flight</option>
              <option value='invicibility'>Invicibility</option>
              <option value='wealthy bat guy'>Wealthy bat guy</option>
            </CustomSelect>
            <CustomCheckbox name='acceptedTerms'>
              I accept the terms and condition
            </CustomCheckbox>
            <button type='submit'>
              {props.isSubmitting ? 'Loading...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </Styles>
  );
}

export default hot(App);
