export function validate(input) {
  let errors = {};
  console.log(input);

  if (!input.first_name) {
    errors.first_name = 'Name is required';
  }
  if (!input.last_name) {
    errors.last_name = 'LastName is required';
  }
  if (!input.dateOfBirth) {
    errors.dateOfBirth = 'Date of Birth is required';
  }
  if (!input.email) {
    errors.email = 'Email is required';
  }
  if (!input.telephone) {
    errors.telephone = 'Phone is required';
  }
  if (!input.neighborhood) {
    errors.neighborhood = 'Neighborhood is required';
  }
  return errors;
}