// utils/validation.js

// Validate email format
export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "Email is required";
  if (!re.test(email)) return "Invalid email format";
  return "";
}

// Validate password rules
export function validatePassword(password) {
  if (!password) return "Password is required";
  if (password.length < 6) return "Password must be at least 6 characters";
  return "";
}

// Validate name (optional)
export function validateName(name) {
  if (!name) return "Name is required";
  if (name.length < 2) return "Name must be at least 2 characters";
  return "";
}

// Confirm password validation
export function validateConfirmPassword(password, confirmPassword) {
  if (!confirmPassword) return "Please confirm your password";
  if (password !== confirmPassword) return "Passwords do not match";
  return "";
}

// Example: combine all signup validations
export function validateSignupForm({ name, email, password, confirmPassword }) {
  return {
    name: validateName(name),
    email: validateEmail(email),
    password: validatePassword(password),
    confirmPassword: validateConfirmPassword(password, confirmPassword),
  };
}
