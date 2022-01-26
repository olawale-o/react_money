import React from 'react';
import { Formik, Form } from 'formik';
import BioDataForm from '../../components/BioDataForm';
import CredentialsForm from '../../components/CredentialsForm';
import NextOfKinForm from '../../components/NextOfKinForm';
import Schema from '../../formModels/SavingsAccount/Schema';
import formInitialValues from '../../formModels/SavingsAccount/formInitialValues';

const renderStepForm = (step) => {
  switch (step) {
    case 0:
      return <BioDataForm />;
    case 1:
      return <NextOfKinForm />;
    case 2:
      return <CredentialsForm />;
    default:
      return <div>Form Not found</div>;
  }
};

const Savings = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const currentValidationSchema = Schema[activeStep];
  const steps = ['BioData', 'Next of Kin', 'Credentials'];
  const isLastStep = activeStep === steps.length - 1;
  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      console.log('Submitting form');
      console.log(values);
    } else {
      console.log('Showing next form');
      console.log(values);
      actions.setSubmitting(false);
      actions.setTouched({});
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <div className="form__container">
      <Formik
        initialValues={formInitialValues}
        validationSchema={currentValidationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            {renderStepForm(activeStep)}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Savings;
