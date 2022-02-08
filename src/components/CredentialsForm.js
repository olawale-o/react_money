import { useField } from 'formik';
import PropType from 'prop-types';
import MyFile from './shared/MyFile';
import Preview from './shared/Preview';

const CredentialsForm = ({
  formField,
  setFieldValue,
}) => {
  const { nepaBill, identity, signature } = formField;
  const [nepaBillField] = useField(nepaBill);
  const [identityField] = useField(identity);
  const [signatureField] = useField(signature);
  const nepaBillImage = nepaBillField.value;
  const identityImage = identityField.value;
  const signatureImage = signatureField.value;
  return (
    <>
      <MyFile type="file" name={nepaBill.name} setFieldValue={setFieldValue} />
      {nepaBillImage && (<Preview file={nepaBillImage} />)}
      <MyFile type="file" name={identity.name} setFieldValue={setFieldValue} />
      {identityImage && (<Preview file={identityImage} />)}
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
    identity: PropType.shape({
      name: PropType.string.isRequired,
    }).isRequired,
    signature: PropType.shape({
      name: PropType.string.isRequired,
    }).isRequired,
  }).isRequired,
  setFieldValue: PropType.func.isRequired,
};
