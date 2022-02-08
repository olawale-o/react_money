export default {
  name: 'SavingsAccount',
  formField: {
    account: {
      name: 'accountType',
      error: {
        required: 'Please select an account',
      },
    },
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
    identity: {
      name: 'identity',
      error: {
        required: 'Identity is required',
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
