export const isEmail = (email) => {
  const emailRegex = /^[a-z0-9.-]+@[a-z0-9-]+\.[a-z0-9.-]+$/;
  return emailRegex.test(email);
};
