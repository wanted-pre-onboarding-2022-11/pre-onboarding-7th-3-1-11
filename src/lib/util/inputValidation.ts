export const inputValidation = (text: string): boolean => {
  const regex = /^[가-힣]+$/;
  if (regex.test(text)) {
    return true;
  }
  return false;
};
