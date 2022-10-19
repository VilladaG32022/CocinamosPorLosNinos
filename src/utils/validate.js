export function validate(input) {
  const errors = {};
  console.log(input);

  if (!input.first_name) {
    errors.first_name = 'Nombre es un requerimiento';
  }
  if (!input.last_name) {
    errors.last_name = 'Apellido es un requerimiento';
  }
  if (!input.dateOfBirth) {
    errors.dateOfBirth = 'Fecha de nacimiento es un requerimiento';
  }
  if (!input.email) {
    errors.email = 'Email es un requerimiento';
  }
  if (!input.telephone) {
    errors.telephone = 'Telefono es un requerimiento';
  }
  if (!input.neighborhood) {
    errors.neighborhood = 'Barrio es un requerimiento';
  }
  return errors;
}
