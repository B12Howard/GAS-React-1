export default function validate(values) {
  let errors = {};
  if (!values.firstname) {
    errors.firstname = 'First name is required';
  }
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  return errors;
}
