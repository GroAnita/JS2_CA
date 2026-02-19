/**
 * testing an escapeHTML function to prevent XSS attacks.
 * it works by replacing special characters with safe HTML entities.
 * Like in 5.2 about cross site scripting , I wanted to try something I found on Stackoverflow : https://stackoverflow.com/questions/2781574/xss-attack-prevention?rq=3 it is a very old post ..
 */

export function escapeHtml(value = '') {
  const str = String(value);
  return str.replace(/[&<>"']/g, (char) => {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    };
    return map[char];
  });
}
