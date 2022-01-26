import PropType from 'prop-types';

const FormStepper = ({ stepperValue }) => {
  console.log('FormStepper');

  return (
    <div className="circular__progress-container">
      <div
        className="circular__progress"
        style={{
          background: `conic-gradient(red ${stepperValue * 3.6}deg, white ${stepperValue * 3.6}deg)`,
        }}
      >
        <div className="circular__progress-bar">{stepperValue}</div>
      </div>
    </div>

  );
};

export default FormStepper;

FormStepper.propTypes = {
  stepperValue: PropType.number.isRequired,
};
