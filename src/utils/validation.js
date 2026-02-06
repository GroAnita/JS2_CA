export function isValidPassword(password) {
    if (password.length < 8) {
        return "Password needs to be at least 8 characters long.";
    }

    if (!/[A-Za-z]/.test(password)) {
        return "Password must contain at least one letter.";
    }

    if (!/[0-9]/.test(password)) {
        return "Password must contain at least one number.";
    }

    return null; // when password is valid
}

export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function isValidName(name) {
    return name.trim().length >= 2;
}