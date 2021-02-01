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
          validationSchema={}></Formik>
      </Styles>
    );
  }
}

export default hot(App);
