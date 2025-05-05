export const setUserDataToLocalStorage = (userData) => {
  localStorage.setItem("user", JSON.stringify(userData));
};

export const getUserDataFromLocalStorage = (initialValue) => {
  const store = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : initialValue;
  return store;
};

export const setTokenDataToLocalStorage = (tokenData) => {
  localStorage.setItem("token", JSON.stringify(tokenData));
};

export const getTokenDataFromLocalStorage = (initialValue) => {
  const store = localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : initialValue;
  return store;
};
