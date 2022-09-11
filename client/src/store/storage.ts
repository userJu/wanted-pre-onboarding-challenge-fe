interface props {
  key: string;
}

export const getStorage = () => {};
export const setStorage = ({ key, value }: props & { value: string }) => {
  localStorage.setItem(key, value);
};
