export const saveTokenIntoLocalStorage = (value: string) => {
  localStorage.setItem('github-access-token', value);
};
export const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem('github-access-token');
  return token;
};
