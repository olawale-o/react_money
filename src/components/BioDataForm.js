import MyInput from './shared/MyInput';

const BioDataForm = () => {
  console.log('SavingsForm');

  return (
    <div>
      <MyInput type="text" name="firstName" placeholder="First Name" />
      <MyInput type="text" name="lastName" placeholder="Last Name" />
      <MyInput type="text" name="phoneNumber" placeholder="Phone" />
      <div className="account__btns">
        <button type="submit" className="btn-back">Back</button>
        <button type="submit" className="btn-next">Create</button>
      </div>
    </div>

  );
};

export default BioDataForm;
