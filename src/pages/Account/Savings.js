import React from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import BioDataForm from '../../components/BioDataForm';
import CredentialsForm from '../../components/CredentialsForm';
import NextOfKinForm from '../../components/NextOfKinForm';
import FormStepper from '../../components/FormStepper';
import Schema from '../../formModels/SavingsAccount/Schema';
import formInitialValues from '../../formModels/SavingsAccount/formInitialValues';
import formModel from '../../formModels/SavingsAccount/formModel';
import createAccount from '../../redux/account/account_async_action';
import { createSavingsAccount } from '../../routes/account';
import useNavigator from '../../helper';

const { formField } = formModel;

const renderStepForm = (step, setFieldValue) => {
  switch (step) {
    case 0:
      return <BioDataForm formField={formField} />;
    case 1:
      return <NextOfKinForm formField={formField} />;
    case 2:
      return (
        <CredentialsForm
          formField={formField}
          setFieldValue={setFieldValue}
        />
      );
    default:
      return <div>Form Not found</div>;
  }
};

const Savings = ({ handleCreateAccount }) => {
  const { pushAndReplace } = useNavigator(true);
  const [activeStep, setActiveStep] = React.useState(0);
  const currentValidationSchema = Schema[activeStep];
  const steps = ['Credentials', 'Next of Kin', 'BioData'];
  const isLastStep = activeStep === steps.length - 1;
  const stepperValue = Math.floor((activeStep / steps.length) * 100);
  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      const formData = new FormData();
      formData.append('account_type_id', values.accountType);
      formData.append('balance', values.balance);
      formData.append('bank_id', values.bankName);
      formData.append('next_of_kin_first_name', values.nextOfKinFirstName);
      formData.append('next_of_kin_last_name', values.nextOfKinLastName);
      formData.append('next_of_kin_phone_number', values.nextOfKinPhoneNumber);
      formData.append('next_of_kin_email', values.nextOfKinEmail);
      formData.append('nepa_bill', values.nepaBill);
      formData.append('identity', values.identity);
      formData.append('signature', values.signature);

      console.log(values);
      const data = {
        endPoint: '/account',
        body: formData,
      };
      handleCreateAccount(data, pushAndReplace);
      // setActiveStep(activeStep + 1);
    } else {
      console.log(values);
      actions.setSubmitting(false);
      actions.setTouched({});
      setActiveStep(activeStep + 1);
    }
  };

  function handleBack() {
    setActiveStep(activeStep - 1);
  }

  // console.log(formInitialValues);

  return (
    <div className="account-form__container">
      <FormStepper stepperValue={stepperValue} />
      <Formik
        initialValues={formInitialValues}
        validationSchema={currentValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            {renderStepForm(activeStep, setFieldValue)}
            <div className="account__btns">
              {activeStep !== 0 && (<button type="button" className="btn-back" onClick={handleBack}>Back</button>) }
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

const mapDispatchToProps = (dispatch) => ({
  handleCreateAccount: (data, push) => dispatch(createAccount(data, createSavingsAccount, push)),
});

export default connect(null, mapDispatchToProps)(Savings);

Savings.propTypes = {
  handleCreateAccount: PropType.func.isRequired,
};
