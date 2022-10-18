export function validate(input) {
  const errors = {};
  console.log(input);

  if (!input.first_name) {
    errors.first_name = 'Este campo es obligatorio';
  }
  if (!input.last_name) {
    errors.last_name = 'Este campo es obligatorio';
  }
  if (!input.dateOfBirth) {
    errors.dateOfBirth = 'Este campo es obligatorio';
  } /* else if (input.dateOfBirth < 18) {
          // Or an object if the translation messages need parameters
          errors.dateOfBirth = {
              message: 'ra.validation.minValue',
              args: { min: 18 }
          }; */
  if (!input.email) {
    errors.email = 'Este campo es obligatorio';
  }
  if (!input.telephone) {
    errors.telephone = 'Este campo es obligatorio';
  }
  if (!input.neighborhood) {
    errors.neighborhood = 'Este campo es obligatorio';
  }
  return errors;
}
