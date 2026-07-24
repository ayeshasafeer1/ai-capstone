const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateName(name) {
  if (!name.trim()) {
    return 'Full name is required.';
  }
  return '';
}

export function validateEmail(email) {
  const trimmed = email.trim();
  if (!trimmed) {
    return 'Email address is required.';
  }
  if (!EMAIL_PATTERN.test(trimmed)) {
    return 'Please enter a valid email address.';
  }
  return '';
}

export function isFormValid({ name, email }) {
  return validateName(name) === '' && validateEmail(email) === '';
}
