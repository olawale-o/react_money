import React from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import useNavigator from '../../../helper';
import createAccount from '../../../redux/account/account_async_action';
import { createSavingsAccount } from '../../../routes/account';
import { formModel, formInitialValues, Schema } from '../../../formModels';
import {
  FormStepper,
  NextOfKinForm,
  CredentialsForm,
  BioDataForm,
  Signatories,
} from '../../../components';

const { formField } = formModel;

const renderStepForm = (step, values, setFieldValue) => {
  switch (step) {
    case 0:
      return <BioDataForm formField={formField} />;
    case 1:
      return <Signatories formField={formField} values={values} />;
    case 2:
      return <NextOfKinForm formField={formField} />;
    case 3:
      return <CredentialsForm formField={formField} setFieldValue={setFieldValue} />;
    default:
      return <div>Form Not found</div>;
  }
};

const JointSavings = ({ handleCreateAccount }) => {
  const { pushAndReplace } = useNavigator(true);
  const signatoryKeys = {
    firstName: 'first_name',
    lastName: 'last_name',
    phoneNumber: 'phone_no',
  };
  const [activeStep, setActiveStep] = React.useState(0);
  const currentValidationSchema = Schema[activeStep];
  const steps = ['BioData', 'Signatories', 'NextOfKin', 'Credentials'];
  const isLastStep = activeStep === steps.length - 1;
  const stepperValue = Math.floor((activeStep / steps.length) * 100);

  function handleBack() {
    setActiveStep(activeStep - 1);
  }

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      const formData = new FormData();
      formData.append('account_type_id', 2);
      formData.append('balance', values.balance);
      formData.append('bank_id', values.bankName);
      formData.append('next_of_kin_first_name', values.nextOfKinFirstName);
      formData.append('next_of_kin_last_name', values.nextOfKinLastName);
      formData.append('next_of_kin_phone_number', values.nextOfKinPhoneNumber);
      formData.append('next_of_kin_email', values.nextOfKinEmail);
      formData.append('nepa_bill', values.nepaBill);
      formData.append('identity', values.identity);
      formData.append('signature', values.signature);
      values.signatories.forEach((signatory, i) => {
        Object.keys(signatory).forEach((key) => {
          formData.append(`signatories[${i}][${signatoryKeys[key]}]`, values.signatories[i][key]);
        });
      });
      const data = {
        endPoint: '/account/savings/joint',
        body: formData,
      };
      handleCreateAccount(data, pushAndReplace);
    } else {
      actions.setSubmitting(false);
      actions.setTouched({});
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <div className="account-form__container">
      <FormStepper stepperValue={stepperValue} />
      <Formik
        initialValues={formInitialValues}
        validationSchema={currentValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, errors }) => (
          <Form>
            {
              errors && errors.signatories && !Array.isArray(errors.signatories)
              && <p className="field-error">{errors.signatories}</p>
            }
            {renderStepForm(activeStep, { signatories: values.signatories }, setFieldValue)}
            <div className="account__btns">
              {activeStep !== 0 ? (<button type="button" className="font__button" onClick={handleBack}><AiOutlineArrowLeft aria-label="prev" /></button>) : <div />}
              <button type="submit" className="font__button">
                { isLastStep ? 'Create' : <AiOutlineArrowRight aria-label="Next" /> }
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

export default connect(null, mapDispatchToProps)(JointSavings);

JointSavings.propTypes = {
  handleCreateAccount: PropType.func.isRequired,
};
