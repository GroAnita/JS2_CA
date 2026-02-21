// validation for register new user .
export function isValidPassword(password) {
  return (
    password.length >= 8 &&
    /[A-Za-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password)
  );
}

// validation for register new email for user .
export function isValidEmail(email) {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return (
    emailRegex.test(email) && email.toLowerCase().endsWith('@stud.noroff.no')
  );
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

// Validating where users can upload images from , to prevent unsavory images.
export function ValidateImageUrls(url) {
  if (!url) return true;

  const allowedHosts = [
    'images.unsplash.com',
    'cdn.pixabay.com',
    'i.imgur.com',
    'images.pexels.com',
  ];

  const bannedWords = [
    'porn',
    'sex',
    'nude',
    'nsfw',
    'xxx',
    'adult',
    'violence',
    'gambling',
    'drugs',
    'hate',
    'racism',
    'terrorism',
  ];

  try {
    const parsed = new URL(url);
    if (!allowedHosts.includes(parsed.hostname)) return false;
    if (bannedWords.some((word) => url.toLowerCase().includes(word)))
      return false;
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
