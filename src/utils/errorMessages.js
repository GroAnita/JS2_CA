export function getUserFriendlyErrorMessages(error) {
  if (error.message === 'Failed to fetch') {
    return 'Network error: Please check your internet connection and try again.';
  } else if (error.message.includes('API error')) {
    return 'Server error: Something went wrong on our end. Please try again later.';
  } else if (error.message.includes('Registration error')) {
    return 'Registration failed: Please ensure all fields are filled out correctly and try again.';
  } else if (error.message.includes('Login error')) {
    return 'Login failed: Incorrect username or password. Please try again.';
  } else {
    return 'An unexpected error occurred. Please try again.';
  }
}
