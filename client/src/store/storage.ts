interface props {
  key: string;
}

export const getStorage = ({ key }: props) => {
  const value = localStorage.getItem(key || "no token!");
  return value;
};
export const setStorage = ({ key, value }: props & { value: string }) => {
  localStorage.setItem(key, value);
};
