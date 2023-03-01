export function validateEmail(email) {
  var valid = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  return valid.test(String(email).toLowerCase());
}
