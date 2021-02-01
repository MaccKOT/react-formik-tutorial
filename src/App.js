import React from 'react';
import { hot } from 'react-hot-loader/root';

import { Styles } from './Styles';
import { Formik } from 'formik';
import * as Yup from 'yup';

class App extends React.Component {
  render() {
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
          })}></Formik>
      </Styles>
    );
  }
}

export default hot(App);
