export const registerFields = [
  {
    name: "fname",
    type: "text",
    label: "First Name",
    placeholder: "Enter First name",
    required: true,
  },
  {
    name: "lname",
    type: "text",
    label: "Last Name",
    placeholder: "Enter Last name",
    required: true,
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
    required: true,
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
    required: true,
  },
];

export const loginFields = [
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter Email",
    required: true,
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter Password",
    required: true,
  },
];

export const panelistLoginFields = [
  {
    name: "fullName",
    type: "select",
    label: "Panelist",
    placeholder: "Select Panelist",
    required: true,
  },
  {
    name: "secretKey",
    type: "password",
    label: "Secret Key",
    placeholder: "Enter Secret Key",
    required: true,
  },
];

export const pollFields = [
  {
    name: "subject",
    type: "text",
    label: "Poll Subject",
    placeholder: "Enter poll subject",
    required: true,
  },
  {
    name: "desc",
    type: "textarea",
    label: "Description",
    placeholder: "Enter poll description",
    required: true,
  },
  {
    name: "pollQuestion",
    type: "text",
    label: "Poll Question",
    placeholder: "Enter poll question",
    required: true,
  },
];
