const debounce = <T, U>(callback: (...args: T[]) => U, delay: number) => {
  let timerId: number;

  return (...args: T[]) => {
    clearTimeout(timerId);
    timerId = window.setTimeout(() => callback(...args), delay);
  };
};

export default debounce;
