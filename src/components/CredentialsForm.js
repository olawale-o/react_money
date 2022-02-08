import { useField } from 'formik';
import PropType from 'prop-types';
import MyFile from './shared/MyFile';
import Preview from './shared/Preview';

const CredentialsForm = ({
  formField,
  setFieldValue,
}) => {
  const { nepaBill, signature } = formField;
  const [nepaBillField] = useField(nepaBill);
  const [signatureField] = useField(signature);
  const nepaBillImage = nepaBillField.value;
  const signatureImage = signatureField.value;
  return (
    <>
      <MyFile type="file" name={nepaBill.name} setFieldValue={setFieldValue} />
      {nepaBillImage && (<Preview file={nepaBillImage} />)}
      <MyFile type="file" name={signature.name} setFieldValue={setFieldValue} />
      {signatureImage && (<Preview file={signatureImage} />)}
    </>
  );
};

export default CredentialsForm;

CredentialsForm.propTypes = {
  formField: PropType.shape({
    nepaBill: PropType.shape({
      name: PropType.string.isRequired,
    }).isRequired,
    signature: PropType.shape({
      name: PropType.string.isRequired,
    }).isRequired,
  }).isRequired,
  setFieldValue: PropType.func.isRequired,
};
