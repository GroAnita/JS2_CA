export function getAvatar(profile) {
  const url = profile.avatar?.url;
  if (typeof url === 'string' && url.trim() !== '') {
    return url;
  }
  return profile.avatar.url;
}
