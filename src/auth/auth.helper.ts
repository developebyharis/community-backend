export function generateUsername(name: string) {
  let base = name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .substring(0, 10);
  const randomNum = Math.floor(100 + Math.random() * 9000);
  return `${base}${randomNum}`;
}
