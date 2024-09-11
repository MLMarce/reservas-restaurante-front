export const registerFormValidation = ({
  name,
  email,
  phone,
  password,
  passwordConfirm,
}: {
  name: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirm: string;
}) => {
  if (!email || !password || !passwordConfirm || !name || !phone)
    return "Todos los campos deben ser completados";
  const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
  const errors = {};

  if (!name) {
    errors.name = "Este campo es requerido";
  }
  if (!email) {
    errors.email = "Este campo es requerido";
  } else if (!emailRegex.test(email)) {
    errors.email = "Formato de correo electrónico inválido";
  }
  if (!phone) {
    errors.phone = "Este campo es requerido";
  }
  if (!password) {
    errors.password = "Este campo es requerido";
  }
  if (!passwordConfirm) {
    errors.passwordConfirm = "Este campo es requerido";
  }
  if (password !== passwordConfirm) {
    errors.passwordConfirm = "Las contraseñas no coinciden";
  }

  return errors;
};
