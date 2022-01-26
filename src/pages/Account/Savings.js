import React from 'react';
import { Formik, Form } from 'formik';
import BioDataForm from '../../components/BioDataForm';
import CredentialsForm from '../../components/CredentialsForm';
import NextOfKinForm from '../../components/NextOfKinForm';
import FormStepper from '../../components/FormStepper';
import Schema from '../../formModels/SavingsAccount/Schema';
import formInitialValues from '../../formModels/SavingsAccount/formInitialValues';
import formModel from '../../formModels/SavingsAccount/formModel';

const { formField } = formModel;

const renderStepForm = (step) => {
  switch (step) {
    case 0:
      return <BioDataForm formField={formField} />;
    case 1:
      return <NextOfKinForm formField={formField} />;
    case 2:
      return <CredentialsForm />;
    default:
      return <div>Form Not found</div>;
  }
};

const Savings = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const currentValidationSchema = Schema[activeStep];
  const steps = ['BioData', 'Next of Kin'];
  const isLastStep = activeStep === steps.length - 1;
  const stepperValue = (activeStep / steps.length) * 100;
  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      console.log(values);
      setActiveStep(activeStep + 1);
    } else {
      console.log('Showing next form');
      actions.setSubmitting(false);
      actions.setTouched({});
      setActiveStep(activeStep + 1);
    }
  };

  console.log(formInitialValues);

  return (
    <div className="account-form__container">
      <FormStepper stepperValue={stepperValue} />
      <Formik
        initialValues={formInitialValues}
        validationSchema={currentValidationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            {renderStepForm(activeStep)}
            <div className="account__btns">
              <button type="button" className="btn-back">Back</button>
              <button type="submit" className="btn-next">
                { isLastStep ? 'Place order' : 'Next' }
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Savings;
