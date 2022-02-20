export default {
  name: 'SavingsAccount',
  formField: {
    bank: {
      name: 'bankName',
      error: {
        required: 'Please select a bank',
      },
    },
    balance: {
      name: 'balance',
      error: {
        required: 'Amount is required',
      },
    },
    signatories: {
      id: {
        name: 'id',
      },
      firstName: {
        name: 'firstName',
        error: {
          required: 'First name is required',
        },
      },
      lastName: {
        name: 'lastName',
        error: {
          required: 'Last name is required',
        },
      },
      phoneNumber: {
        name: 'phoneNumber',
        error: {
          required: 'Phone number is required',
        },
      },
    },
    nextOfKinFirstName: {
      name: 'nextOfKinFirstName',
      error: {
        required: 'First name is required',
      },
    },
    nextOfKinLastName: {
      name: 'nextOfKinLastName',
      error: {
        required: 'Last name is required',
      },
    },
    nextOfKinPhoneNumber: {
      name: 'nextOfKinPhoneNumber',
      error: {
        required: 'Phone number is required',
      },
    },
    nextOfKinEmail: {
      name: 'nextOfKinEmail',
      error: {
        required: 'Email is required',
      },
    },
    nepaBill: {
      name: 'nepaBill',
      error: {
        required: 'Nepa bill is required',
      },
    },
    signature: {
      name: 'signature',
      error: {
        required: 'Signature is required',
      },
    },
  },
};
