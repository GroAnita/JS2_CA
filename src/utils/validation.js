export function isValidPassword(password) {
  return (
    password.length >= 8 &&
    /[A-Za-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password)
  );
}

export function isValidEmail(email) {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidName(name) {
  const nameRegex = /^[A-Za-zÆØÅæøå\s'-]{2,50}$/;
  return nameRegex.test(name.trim());
}

export function toggleRule(element, isValid) {
  if (isValid) {
    element.classList.remove('text-red-500');
    element.classList.add('text-green-500');
  } else {
    element.classList.remove('text-green-500');
    element.classList.add('text-red-500');
  }
}
